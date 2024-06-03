import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'

const Navigation = ({ rootClassNames, items, ulClassNames, liClassNames, gridArea }: any) => {
  return (
    <nav className={rootClassNames} data-grid-area={gridArea}>
        <ul className={cn("text-xs font-medium", ulClassNames)} >
            {
                items.map((item: any) => <>
                  {
                      item.custom_url &&
                        <li key={item.id} className={cn("text-xs font-medium hover:text-primary transition-delay-1000", liClassNames)}>
                          <Image data-src={`${process.env.NEXT_PUBLIC_DOMAIN_BACKEND}${item.icon?.url}`} src={``} width={12} height={12} alt={""} />
                          <Link href={item.custom_url}>{item.title}</Link>
                          <code></code>
                        </li>
                  }
                  {
                      !item.custom_url && <li key={item.id} className={cn("text-xs font-medium", liClassNames)}><span>{item.title}</span></li>
                  }
                    
                </>)
            }
        </ul>
    </nav>
  )
}

export default Navigation
