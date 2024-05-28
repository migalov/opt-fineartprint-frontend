import React from 'react'

const ButtonCounter = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} type="button" className="
      flex
      justify-center
      items-center
      w-[24px]
      h-[24px]
      bg-white
      text-gray-600
      transition
      hover:opacity-75
      disabled:opacity-30
    ">
      {children}
    </button>
  )
}

export default ButtonCounter
