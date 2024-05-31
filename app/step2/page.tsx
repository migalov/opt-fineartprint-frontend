"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import NumberOrder from '../_components/NumberOrder'
import TitleH1 from '../_components/TitleH1'
import PreviewDocument from '../_components/PreviewDocument'
import InputUploadFile from '../_components/CustomFields/InputUploadFile'
import Pagination from '../_components/Pagination'
import TableCell from '../_components/Table/TableCell'
import TitleH2 from '../_components/TitleH2'

import Select, { SelectChangeEvent } from '@mui/material/Select';
import TableRoot from '../_components/Table/TableRoot'
import OrderParameters from '../_components/Table/OrderParameters'
import DocumentParameterRow from '../_components/Table/DocumentParameterRow'
import TotalCost from '../_components/TotalCost'
import CalculatorCounter from '../_components/Calculator/CalculatorCounter'
import { useCounterStore } from '../store'
import ListParameters from '../_components/ListParameters'
import { Checkbox } from '../_components/CustomFields/Checkbox'
import CustomCheckbox from '../_components/CustomFields/CustomCheckbox'
import СonditionsProcessingPersonalData from '../_components/СonditionsProcessingPersonalData'
import DateReady from '../_components/DateReady'

const StepTwo = () => {

    const incrementNumberLanes = useCounterStore(state => state.incrementNumberLanes);
    const decrementNumberLanes = useCounterStore(state => state.decrementNumberLanes);
    const incrementCirculation = useCounterStore(state => state.incrementCirculation);
    const decrementCirculation = useCounterStore(state => state.decrementCirculation);
    const stepNumberLanes = useCounterStore(state => state.stepNumberLanes);
    const stepCirculation = useCounterStore(state => state.stepCirculation);
    const numberLanes = useCounterStore(state => state.stepNumberLanes);
    const circulation = useCounterStore(state => state.stepCirculation);

    return <>
        <div className="container mx-auto flex flex-col gap-4">
            <TitleH1>Оформление заказа</TitleH1>
            <NumberOrder idOrder={32143223} />
        </div>
        <div className="container py-4 grid grid-cols-[2fr_1fr] gap-4 mx-auto items-start">
            <div className="flex flex-col gap-4">
                <InputUploadFile />
                <TitleH2>Предпросмотр</TitleH2>
                <PreviewDocument src={`/images/preview_pdf.png`} />
                <Pagination
                    title={"Листы"}
                    countPages={15}
                />
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

                <TableRoot>
                    <thead>
                        <tr className="bg-gray">
                            <TableCell width="25%" type="head">Параметр</TableCell>
                            <TableCell width="25%" type="head">Требуемый</TableCell>
                            <TableCell width="25%" type="head">В вашем файле</TableCell>
                            <TableCell width="25%" type="head">Статус</TableCell>
                        </tr>
                    </thead>
                    <tbody>
                        <DocumentParameterRow
                            title="Размер файла"
                            requiredValue={<>&lt;&nbsp;2000&nbsp;МБ</>}
                            currentValue={<>10&nbsp;МБ</>}
                            status={true}
                        />
                        <DocumentParameterRow
                            title="Формат файла"
                            requiredValue={<>PDF</>}
                            currentValue={<>PDF</>}
                            status={true}
                        />
                        <DocumentParameterRow
                            title="Все страницы одного размера"
                            requiredValue={<>Да</>}
                            currentValue={<>Нет</>}
                            status={false}
                        />
                    </tbody>
                </TableRoot>

                <p className="text-red text-message">Некоторые загруженные макеты не соответствуют правилам оформления</p>

                <div>
                    <label className="flex items-start  gap-4" id="accept">
                        <CustomCheckbox id={"accept"} />
                        <СonditionsProcessingPersonalData />
                    </label>
                </div>

                <div className="shadow-default rounded-15 py-12 w-full">
                    <div className="flex flex-col gap-4 max-w-[380px] mx-auto">
                        <DateReady
                            title="Готовность"
                            date={"17.04.24"}
                        />
                        <TotalCost
                            cost={4050}
                        />
                        <a href="/step3" className="w-full inline-block bg-black text-white font-bold text-2xl text-center py-4 rounded-15">Оформить заказ</a>
                    </div>
                </div>

            </div>
            <div className="sticky top-6 px-6 rounded-15 flex flex-col gap-4">
                <ListParameters>
                    <ul>
                        <li>Формат печати: 500х700 мм</li>
                        <li>Красочность печати : 4+4</li>
                        <li>Очередность печати: в подбор</li>
                        <li>Вид бумаги: Мелованная </li>
                        <li>Тип бумаги: Глянцевая</li>
                        <li>Плотность бумаги: 150 г/м2</li>
                        <li>Ламинация: Глянцевая 1+0</li>
                        <li>3D лак: 1+0</li>
                        <li>3D фольга: 1+0 золото</li>
                        <li>Резка: Не резать</li>
                    </ul>
                </ListParameters>

                <div className="flex flex-col gap-2">
                    <CalculatorCounter
                        title={"Количество полос"}
                        name={"countLanes"}
                        currentValue={numberLanes}
                        step={stepNumberLanes}
                        incrementClick={incrementNumberLanes}
                        decrementClick={decrementNumberLanes}
                        min={1}
                    />
                    <CalculatorCounter
                        title={"Тираж"}
                        name={"circulation"}
                        currentValue={circulation}
                        step={stepCirculation}
                        incrementClick={incrementCirculation}
                        decrementClick={decrementCirculation}
                        min={100}
                    />
                    <button>Изменить параметры</button>
                </div>
            </div>
        </div>
    </>
}


export default StepTwo
