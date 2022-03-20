import React, { FC } from 'react'

import Link from 'next/link'

import Monkfish from '../../icons/Monkfish'

interface IMonkfishLogo {
  theme?: 'light' | 'dark'
}

const MonkfishLogo: FC<IMonkfishLogo> = () => (
  <Link href="/">
    <div className="flex items-baseline text-4xl font-bold text-center hover:opacity-70 text-primary-400 hover:cursor-pointer">
      <span className="text-3xl text-primary-400 font-cursive">Share</span>
      <span className="text-3xl text-pink-600 font-cursive">F</span>
      <span className="text-3xl text-pink-600 font-cursive">rags</span>
    </div>
  </Link>
)


export default MonkfishLogo
