import React from 'react'
import Link from 'next/link'
import { RiLoginCircleLine } from 'react-icons/ri'

import styles from './LoginButton.module.scss'

const LoginButton = () => {
  return (
    <Link href="/auth/signin">
      <button type="button" className={styles.rainbowButton}>
        <div className="flex items-center space-x-2">
          <RiLoginCircleLine className="text-2xl" />
          <span>LOGIN</span>
        </div>
      </button>
    </Link>
  )
}

export default LoginButton
