import React, { FC } from 'react'
import Monkfish from '../../icons/Monkfish'

interface IMonkfishLogo {
  theme?: 'light' | 'dark'
}

const MonkfishLogo: FC<IMonkfishLogo> = ({ theme }) => {
  return (
    <div className="flex items-baseline p-1 text-4xl font-bold text-center text-primary-400">
      <span>Monk</span>
      <Monkfish className="w-10 h-10 transition-all transform -rotate-90 fill-current text-primary-400" />
      <span className="text-5xl text-pink-600 font-cursive">C</span>
      <span className="text-3xl text-pink-600 font-cursive">orals</span>
    </div>
  )
}

export default MonkfishLogo
