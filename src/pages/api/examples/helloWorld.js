// This is an example of how to access a session from an API route

export default async (req, res) => {
  console.log('🚀 ~ file: helloWorld.js ~ line 4 ~ req', req)
  res.json({ status: 'Hello World!' })
}
