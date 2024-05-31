import React from 'react'

const TableRoot = ({ children }: any) => {
  return (
    <div className="rounded-15 overflow-hidden border-dark-gray border-[1px] w-full">
        <table className="border-collapse w-[calc(100%+2px)] m-[-1px]">
            {children}
        </table>
    </div>
  )
}

export default TableRoot
