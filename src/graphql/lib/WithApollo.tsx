import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client'
import { useRouter } from 'next/router'
import nextWithApollo from 'next-with-apollo'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GQL_ENDPOINT,
})

const authHeaders = getHeaders()
console.log(
  '🚀 ~ file: WithApollo.tsx ~ line 18 ~ authMiddleware ~ authHeaders',
  authHeaders,
)

const authMiddleware = new ApolloLink((operation, forward) => {
  const authHeaders = getHeaders()

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      ...authHeaders,
    },
  }))

  return forward(operation)
})

const WithApollo = nextWithApollo(
  ({ initialState }) => {
    // get the authentication token from local storage if it exists

    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: concat(authMiddleware, httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter()
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      )
    },
  },
)

export default WithApollo

/*
 * returns headers for bearer token when JWT token is availabe in local storage or admin access for Hasura API
 **/
function getHeaders() {
  let userAuth: { Authorization: string } | null = null

  // Access API with API KEY
  const adminAuth = {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
  }

  // Check localstorage when rendering on clientside
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token') || null
    userAuth = token ? { Authorization: `Bearer ${token}` } : null
  }

  // return adminAuth
  return userAuth ? userAuth : adminAuth
}
