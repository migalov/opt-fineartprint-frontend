import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ItemMenu = ({ item, offLink = false, classNames }: any) => {
  return (
    <li>
        {
            !offLink &&
            <Link href={item.custom_url} className='flex items-center gap-2'>
                <Image width="12" src={`${process.env.NEXT_PUBLIC_DOMAIN_BACKEND}`} alt={""} />
                <span>{ item.title }</span>
            </Link>
        }
        {
            offLink &&
            <div className="flex items-center gap-2">
                <Image width={12} height={12} src={`${process.env.NEXT_PUBLIC_DOMAIN_BACKEND}`} alt={""} />
                <span className={classNames}>{ item.title }</span>
            </div>
        }
        
        
    </li>
  )
}

export default ItemMenu
