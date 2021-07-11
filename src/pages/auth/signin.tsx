import React from 'react'
import { getProviders, getSession, ClientSafeProvider } from 'next-auth/client'
import SocialProvider from '../../components/auth/SocialProvider'
import { GetServerSidePropsContext } from 'next'
import MonkfishLogo from 'src/components/nav/top-nav/MonkfishLogo'

interface SignInProps {
  providers: ClientSafeProvider[]
}

export default function SignIn(props: SignInProps) {
  const { providers } = props

  return (
    <div className="flex flex-col justify-center min-h-screen px-3 sm:p-0">
      <div className="mx-auto">
        <div className="w-full rounded-md bg-ocean-darker">
          <div className="flex flex-col items-center justify-center px-10 py-12">
            <div className="flex items-baseline space-x-2 text-4xl font-bold">
              <span>Welcome to</span> <MonkfishLogo />
            </div>
            <div className="tracking-tight ">
              Monkfish Corals community is a community of obessed aquatic
              hobbysts
            </div>
            <div className="w-full mt-10 space-y-3">
              {Object.values(providers).map(provider => (
                <div key={provider.name}>
                  <SocialProvider authProvider={provider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
