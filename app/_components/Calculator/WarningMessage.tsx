import React from 'react'

const WarningMessage = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-4 bg-yellow border-yellow border-[2px] rounded-15 bg-opacity-40 p-5">
        {children}
    </div>
  )
}

export default WarningMessage
