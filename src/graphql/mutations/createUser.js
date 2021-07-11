async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch('https://hasura-ifk5.onrender.com/v1/graphql', {
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
  mutation INSERT_NEW_USER($id: String!, $name: String!, $email: String, $picture: String) {
    insert_users_one(object: {id: $id, name: $name, email: $email, picture: $picture}, on_conflict: {constraint: users_pkey, update_columns: created_at}) {
      id
    }
  }
`

export function addNewUser(id, name, email, picture) {
  return fetchGraphQL(operationsDoc, 'INSERT_NEW_USER', {
    id,
    name,
    email,
    picture,
  })
}
