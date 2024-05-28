"use client"

import React, { useEffect, useState } from 'react'
import { useCounterStore } from '../store';
import axios from 'axios';
import globalApi from '../globalApi';
import CalculatorParameter from '../_components/CalculatorParameter';
import TitleH1 from '../_components/TitleH1';
import TitleH2 from '../_components/TitleH2';
import CalculatorCounter from '../_components/CalculatorCounter';
import DateReady from '../_components/DateReady';
import TotalCost from '../_components/TotalCost';
import CustomCheckbox from '../_components/CustomCheckbox';
import СonditionsProcessingPersonalData from '../_components/СonditionsProcessingPersonalData';

const Calculator = () => {

    const [calc, setCalc] = useState([])

    useEffect(() => {
        getCalculator()
    }, []);

    const getCalculator = () => {
        globalApi.getCalculation().then( resp => {
            setCalc(resp?.data?.data?.attributes);
        })
    }

    // const count = useCounterStore((state) => state.count);
    // const increment = useCounterStore((state) => state.increment);
    // const decrement = useCounterStore((state) => state.decrement);
    // const calculationOptions = useCounterStore((state) => state.calculationOptions)
    const incrementNumberLanes = useCounterStore(state => state.incrementNumberLanes);
    const decrementNumberLanes = useCounterStore(state => state.decrementNumberLanes);
    const incrementCirculation = useCounterStore(state => state.incrementCirculation);
    const decrementCirculation = useCounterStore(state => state.decrementCirculation);
    const stepNumberLanes = useCounterStore(state => state.stepNumberLanes);
    const stepCirculation = useCounterStore(state => state.stepCirculation);
    const numberLanes = useCounterStore(state => state.stepNumberLanes);
    const circulation = useCounterStore(state => state.stepCirculation);

    return (
        <div className='container mx-auto px-4'>
            <TitleH1>{calc?.title}</TitleH1>
            <form action="" className='py-10 grid grid-cols-[2fr_1fr] gap-4'>
                <div className='flex flex-col gap-6'>
                    {
                        calc?.parameters?.map( (parameter: any) => 
                            <CalculatorParameter parameter={parameter} key={parameter.id} />
                        )
                    }  
                </div>
                <div className="w-full mx-auto flex flex-col gap-4">
                <div className="shadow-default p-6 rounded-15 flex flex-col gap-4">
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
                    <hr className="border-gray border-[1px]" />
                    <div className="flex flex-col gap-4 max-w-[380px] mx-auto">
                    <DateReady
                        title="Готовность"
                        date={"17.04.24"}
                    />
                    <TotalCost cost={3090} />
                    <a href="#" className="w-full inline-block bg-black text-white font-bold text-2xl text-center py-4 rounded-15">Оформить заказ</a>
                    <div>
                        <label className="flex items-start  gap-4" id="accept">
                            <CustomCheckbox id={"accept"} />
                            <СonditionsProcessingPersonalData />
                        </label>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Calculator
