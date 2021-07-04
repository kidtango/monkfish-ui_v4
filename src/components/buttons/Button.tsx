import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

type Size = 'small' | 'medium' | 'large'
type ButtonType = 'primary' | 'secondary' | 'plain'

interface ButtonStates {
  disabled: Boolean
  isActive?: Boolean
}

interface IButton {
  children: ReactNode
  buttonStates?: ButtonStates
  active?: Boolean
  buttonType: ButtonType
  size: Size
  onClick?: () => void
  type?: String
}

const Button: FC<IButton> = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={buttonStyles(props)}
      disabled={props.buttonStates?.disabled as boolean}
    >
      {props.children}
    </button>
  )
}

export default Button

const buttonStyles = (props: IButton) => {
  const base =
    'lex items-center px-2 py-2 space-x-1 text-xl transition-all outline-none bg-opacity-50 hover:bg-opacity-90 focus:outline-none'
  const size = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }
  const buttonType = {
    primary:
      'flex items-center justify-center space-x-1 bg-primary-700 p-2 px-3 rounded hover:(opacity-80) outline-none focus:outline-none focus:ring focus:ring-primary-400 text-gray-200 font-semibold',
    secondary:
      'text-primary rounded ring ring-deepOcean-500 hover:text-primary-600 font-semibold',
    plain:
      'ring-0 text-deepOcean-300 hover:p-2 hover:bg-ocean-700 hover:rounded font-semibold',
  }
  const states = {
    disabled: 'text-gray-300 opacity-30 ring-gray-300 hover:text-gray-300',
  }
  return clsx(
    base,
    size[props.size],
    buttonType[props.buttonType],
    props?.buttonStates?.disabled && states.disabled,
  )
}

// secondary = { secondary }
// primary = { primary }
// plain = { plain }
// disabled = { disabled }
// size = { size }
// type = { type }
