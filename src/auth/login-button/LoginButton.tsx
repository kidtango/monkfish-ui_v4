import React from 'react'
import { RiLoginCircleLine } from 'react-icons/ri'

import styles from './LoginButton.module.scss'

const LoginButton = () => {
  return (
    <button type="button" className={styles.rainbowButton}>
      <div className="flex items-center space-x-2">
        <span>LOGIN</span>
        <RiLoginCircleLine className="text-2xl" />
      </div>
    </button>
  )
}

export default LoginButton
