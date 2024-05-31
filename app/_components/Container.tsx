import React from 'react'

const Container = ({ children }: any) => {
  return (
    <div className='container mx-auto px-4 flex flex-col gap-6'>
      {children}
    </div>
  )
}

export default Container
