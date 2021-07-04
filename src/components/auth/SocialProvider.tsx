import React, { FC } from 'react'
import { ClientSafeProvider, signIn } from 'next-auth/client'
import { GrGoogle, GrFacebookOption, GrLogin } from 'react-icons/gr'
import clsx from 'clsx'

type Provider = 'Facebook' | 'Google'

interface ISocialProvider {
  authProvider: ClientSafeProvider
}

const SocialProvider: FC<ISocialProvider> = ({ authProvider }) => {
  const getSocialProviderIcon = (providerName: Provider) => {
    if (providerName === 'Facebook') {
      return <GrFacebookOption className="w-8 h-8 text-white" />
    }

    if (providerName === 'Google') {
      return <GrGoogle className="w-8 h-8 text-white" />
    }

    // Default icon if provider is unknown
    return <GrLogin className="w-8 h-8 text-white" />
  }

  return (
    <div
      className={socialProviderStyles(authProvider.name as Provider)}
      onClick={() => signIn(authProvider.id)}
    >
      {getSocialProviderIcon(authProvider.name as Provider)}
      <span>Login with {authProvider.name}</span>
    </div>
  )
}

export default SocialProvider

function socialProviderStyles(providerName: Provider) {
  const base =
    'p-4 rounded-md focus:(outline-none) w-full flex justify-center items-center text-gray-100 space-x-6 transform font-semibold hover:opacity-80'

  const provider = {
    Google: 'bg-red-500',
    Facebook: 'bg-blue-500',
  }

  return clsx(base, provider[providerName])
}
