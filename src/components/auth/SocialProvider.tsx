import React, { ReactNode } from 'react'
import { ClientSafeProvider, signIn } from 'next-auth/client'

import tw, { styled, css } from 'twin.macro'
import { GrGoogle, GrFacebookOption } from 'react-icons/gr'

interface SocialProviderProps {
  authProvider: ClientSafeProvider
}

const SocialProviderButton = styled.button(({ providerName }) => [
  tw`p-4 rounded-md focus:(outline-none) w-full flex justify-center items-center text-gray-100 space-x-6 transform font-semibold`,
  tw`hover:(opacity-80)`,
  providerName === 'Google' && tw`bg-red-500`,
  providerName === 'Facebook' && tw`bg-blue-500`,
])

const SocialProvider: React.FC<SocialProviderProps> = ({ authProvider }) => {
  const getSocialProviderIcon = (providerName: string) => {
    if (providerName === 'Facebook') {
      return <GrFacebookOption tw="text-white w-8 h-8" />
    }

    if (providerName === 'Google') {
      return <GrGoogle tw="text-white w-8 h-8" />
    }
  }

  return (
    <SocialProviderButton
      providerName={authProvider.name}
      onClick={() => signIn(authProvider.id)}
    >
      {getSocialProviderIcon(authProvider.name)}
      <span>Login with {authProvider.name}</span>
    </SocialProviderButton>
  )
}

export default SocialProvider
