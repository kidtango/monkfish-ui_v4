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

const authMiddleware = new ApolloLink((operation, forward) => {
  // const authHeaders = getHeaders()

  let token: string | null = ''

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || null
    // userAuth = token ? { Authorization: `Bearer ${token}` } : null
  }

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context

  const session = await getSession({ req })

  if (session && res && session.token) {
    res.writeHead(302, {
      location: '/',
    })
    res.end()
  }
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
