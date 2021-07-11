module.exports = {
  schema: [
    {
      'https://hasura-ifk5.onrender.com/v1/graphql': {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/index.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
