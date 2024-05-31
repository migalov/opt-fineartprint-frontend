
import React from 'react'
import Container from '../_components/Container'
import TableRoot from '../_components/Table/TableRoot'
import TableCell from '../_components/Table/TableCell'
import OrderParameters from '../_components/Table/OrderParameters'
import TitleH1 from '../_components/TitleH1'
import CustomInput from '../_components/CustomFields/CustomInput'
import CustomTextarea from '../_components/CustomFields/CustomTextarea'
import CustomSelect from '../_components/CustomFields/CustomSelect'
import TitleH2 from '../_components/TitleH2'
import CalculatorRadioButton from '../_components/Calculator/CalculatorRadioButton'

const StepFifth = () => {
  return (
    <Container>
        <TitleH1>Ваш заказ</TitleH1>
        <div className='grid grid-cols-[2fr_1fr] gap-8'>
            <form className='flex flex-col gap-6'>
                <TableRoot>
                        <thead>
                            <tr className="bg-gray">
                                <TableCell width="70%" type="head">Параметры заказа</TableCell>
                                <TableCell width="15%" type="head">Количество</TableCell>
                                <TableCell width="15%" type="head">Цена</TableCell>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderParameters
                                options={
                                    <ul>
                                        <li>Формат печати: 500х700 мм</li>
                                        <li>Красочность печати: 4+4</li>
                                        <li>Очередность печати: в подбор</li>
                                        <li>Вид бумаги: Мелованная </li>
                                        <li>Тип бумаги: Глянцевая</li>
                                        <li>Плотность бумаги: 150 г/м2</li>
                                        <li>Ламинация: Глянцевая 1+0</li>
                                        <li>3D лак: 1+0</li>
                                        <li>3D фольга: 1+0 золото</li>
                                        <li>Резка: Не резать</li>
                                    </ul>
                                }
                                count={100}
                                price={3090}
                            />
                            
                        </tbody>
                </TableRoot>
                <TitleH2>Контактные данные получателя</TitleH2>
                <fieldset>
                    <CustomInput
                        label="ФИО"
                        name="fullName"
                    />
                    <CustomInput
                        label="Телефон"
                        name="phone"
                    />
                    <CustomInput
                        label="Email"
                        name="email"
                    />
                    <CustomTextarea />
                </fieldset>
                <TitleH2>Способ оплаты</TitleH2>
                <fieldset className='flex items-center gap-4'>
                    <CalculatorRadioButton
                        name={"typePay"}
                        value={"По счёту"}
                        type={"checkbox"}
                    />
                    <CustomSelect
                        items={[
                            {
                                value: "Рога и копыта"
                            },
                            {
                                value: "Yandex"
                            },
                            {
                                value: "TJPack"
                            }
                        ]}
                    />
                </fieldset>
                <div>
                    <h3>Реквизиты</h3>
                </div>
                
            </form>

        </div>
    </Container>
  )
}

export default StepFifth
