import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  
  return (
    <>
        <Link href="/">
          <Image width={90} height={90} src={'logo.svg'} alt={''} />
        </Link>
    </>
    
  )
}

export default Logo
