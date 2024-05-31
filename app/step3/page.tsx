"use client"

import React, { useEffect, useState } from 'react'
import CalculatorParameter from '../_components/Calculator/CalculatorParameter'
import TitleH1 from '../_components/TitleH1'
import TitleH2 from '../_components/TitleH2'
import globalApi from '../globalApi'
import CalculatorCounter from '../_components/Calculator/CalculatorCounter'
import { useCounterStore } from '../store'
import DateReady from '../_components/DateReady'
import CustomCheckbox from '../_components/CustomFields/CustomCheckbox'
import СonditionsProcessingPersonalData from '../_components/СonditionsProcessingPersonalData'
import TotalCost from '../_components/TotalCost'
import TableRoot from '../_components/Table/TableRoot'
import TableCell from '../_components/Table/TableCell'
import DocumentParameterRow from '../_components/Table/DocumentParameterRow'

const StepThird = () => {

    const incrementNumberLanes = useCounterStore(state => state.incrementNumberLanes);
    const decrementNumberLanes = useCounterStore(state => state.decrementNumberLanes);
    const incrementCirculation = useCounterStore(state => state.incrementCirculation);
    const decrementCirculation = useCounterStore(state => state.decrementCirculation);
    const stepNumberLanes = useCounterStore(state => state.stepNumberLanes);
    const stepCirculation = useCounterStore(state => state.stepCirculation);
    const numberLanes = useCounterStore(state => state.stepNumberLanes);
    const circulation = useCounterStore(state => state.stepCirculation);

    const [calc, setCalc] = useState([])

    useEffect(() => {
        getCalculator()
    }, []);

    const getCalculator = () => {
        globalApi.getCalculation().then( resp => {
            setCalc(resp?.data?.data?.attributes);
        })
    }


  return (
    <div className='container mx-auto px-4'>
            <TitleH1>{calc?.title}</TitleH1>
            <form action="" className='py-10 grid grid-cols-[2fr_1fr] gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='shadow-default rounded-15 p-8 flex flex-col gap-6'>
                        {
                            calc?.parameters?.map( (parameter: any) => 
                                <CalculatorParameter parameter={parameter} key={parameter.id} />
                            )
                        }  
                        <button className='bg-primary text-white text-h2 font-bold rounded-8 p-2'>Сохранить изменения</button>
                    </div>
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
                            <a href="/step4" className="w-full inline-block bg-black text-white font-bold text-2xl text-center py-4 rounded-15">Оформить заказ</a>
                        </div>
                    </div>

                </div>
                

                <div className="w-full mx-auto flex flex-col gap-4">
                    <div className="sticky top-6 p-6 flex flex-col gap-4">
                        <TitleH2>Параметры заказа</TitleH2>
                        <ul>
                        <li className="flex items-center justify-between text-h3">Формат печати: 500х700 мм</li>
                        </ul>
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
                        {/* <hr className="border-gray border-[1px]" />
                        <div className="flex flex-col gap-4 max-w-[380px] mx-auto">
                        <DateReady
                            title="Готовность"
                            date={"17.04.24"}
                        />
                        <TotalCost cost={3090} />
                        <a href="/step2" className="w-full inline-block bg-black text-white font-bold text-2xl text-center py-4 rounded-15">Оформить заказ</a>
                        <div>
                            <label className="flex items-start  gap-4" id="accept">
                                <CustomCheckbox id={"accept"} />
                                <СonditionsProcessingPersonalData />
                            </label>
                        </div>
                        </div> */}
                    </div>
                </div>
            </form>
        </div>
  )
}

export default StepThird
