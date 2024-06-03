import style from './Header.module.scss'
import cn from 'classnames'
import Logo from '../Logo'
import Navigation from '../Navigation/Navigation'
// import Navigation from './Navigation'

export default function Header ({ headerData }: any) {
  return (
    <header className="optfap-header">
        <div className="container mx-auto flex flex-col gap-4 p-4">
            <div className={cn("flex flex-wrap gap-4 sm:gap-7 md:gap-10")}>
                <Logo />
                <div className={cn('gap-1 sm:gap-3 md:gap-[.5rem]', style.menus)}>
                    <Navigation items={headerData[3].items} ulClassNames={"flex gap-4"} gridArea={1} />
                    <Navigation items={headerData[0].items} ulClassNames={"flex gap-4"} gridArea={2} />
                    <Navigation items={headerData[1].items} ulClassNames={"flex flex-col justify-end sm:flex-row gap-2 md:gap-4"} gridArea={3} />
                </div>
                <Navigation rootClassNames={'w-full'} items={headerData[2].items} ulClassNames={"flex sm:gap-6 md:gap-8 lg:gap-10"} liClassNames={"text-sm font-medium"} />
            </div>
        </div>
    </header>
  )
}



