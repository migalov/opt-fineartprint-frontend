import React from 'react'
import VK from '../VectorIcons/VK'
import Navigation from '../Navigation/Navigation'
import Telegram from '../VectorIcons/Telegram'
import style from './Footer.module.scss'
import cn from 'classnames'

const Footer = ({ footerData }: any) => {
  return (
    <footer className={cn('bg-gray', style.footer)}>
    <div className={cn("container mx-auto grid gap-[1rem] md:gap-x-[2rem] p-4", style.footerWrap)}>
      <div className="flex flex-col gap-4" data-grid-area="social">
        <h4 className="text-sm font-medium hidden md:block">Мы в социальных сетях</h4>
        <ul className="flex items-center gap-2">
          <li>
            <a href="vk.com">
              <VK />
            </a>
          </li>
          <li>
            <a href="tg.me">
              <Telegram />
            </a>
          </li>
        </ul>
      </div>
      <Navigation
        rootClassNames="flex items-center"
        ulClassNames="gap-1 sm:gap-4 flex flex-col flex-wrap sm:flex-row"
        liClassNames="font-medium"
        gridArea="main_menu"
        items={footerData[0].items}
      />
      <div data-grid-area="contacts">
        <h4 className="text-sm font-medium d-none">Контакты</h4>
        <ul>
          <li>График работы: 10:00 - 18:00 ПН-ПТ</li>
          <li><a href="tel:+74952510877">+7 (495) 251-08-77</a></li>
          <li><a href="mailto:info@fineart-print.ru">info@fineart-print.ru</a></li>
          <li><a href="#">Москsва, ул. Зорге 15, к. 1</a></li>
        </ul>
      </div>
      <Navigation
        rootClassNames="flex items-center justify-between"
        ulClassNames="flex flex-1 flex-col gap-[.5em] sm:flex-row justify-between gap-4"
        liClassNames="font-normal text-black opacity-50 hover:opacity-100"
        gridArea="bottom_menu"
        items={footerData[1].items}
      />
    </div>
  </footer>
  )
}

export default Footer
