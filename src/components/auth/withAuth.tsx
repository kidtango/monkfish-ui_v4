import React from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/client'
import { GetServerSidePropsContext } from 'next'

function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const Router = useRouter()
    const [session, loading] = useSession()

    if (typeof window !== 'undefined' && loading) return null

    if (session) return <Component {...props} />

    if (typeof window !== 'undefined') Router.push('/auth/signin')

    return null
  }
}

export default withAuth

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  return {
    props: { session },
  }
}
