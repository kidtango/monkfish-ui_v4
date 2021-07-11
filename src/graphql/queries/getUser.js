import fetch from 'node-fetch'

export async function getUserGraphql(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.HASURA_GQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  })

  return await result.json()
}

const operationsDoc = `
  query GetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      name
    }
  }
`

export function getUser(id) {
  return getUserGraphql(operationsDoc, 'GetUser', { id: id })
}
