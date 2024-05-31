import React from 'react'
import TitleH1 from '../_components/TitleH1'
import TitleH2 from '../_components/TitleH2'
import Container from '../_components/Container'
import Image from 'next/image'

const page = () => {
  return (
    <Container>
        <TitleH1>Спасибо за ваш заказ № 333333</TitleH1>
        <p>Счёт придёт вам на почту<br />после оплаты заказ пойдёт в работу</p>
        <p className="font-bold">Статус заказа можно увидеть в <a href="/personal">кабинете</a></p>
        <p className="font-bold">Уведомление о готовности заказа придёт вам на почту </p>
        <div className="mt-7 flex flex-col gap-4">
            <TitleH2>Ваш персональный менеджер</TitleH2>
            <div className="flex gap-4">
            <Image width={114} height={114} src="/images/avatar-manager-bg.png" alt="" />
            <div className="flex flex-col justify-between">
                <h3 className="font-bold">Дмитрий Кумченко</h3>
                <div className="">
                <p><a href="+74952150877">+7 (495) 215-08-77</a> доб. 110</p>
                <p><a href="mailto:d.kumchenko@fineart-print.ru">d.kumchenko@fineart-print.ru</a></p>
                </div>
                <a className="btn bg-primary block w-[224px] py-[.5em] text-center rounded-[15px] font-medium" href="https://wa.me/+74952150877">Написать в WhatsApp</a>
            </div>
            </div>
            
        </div>
    </Container>
    
  )
}

export default page
