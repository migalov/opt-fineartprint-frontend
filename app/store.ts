import axios from "axios";
import { create } from "zustand";

type CounterStore = {
    calculationOptions: any;
    increment?: any;
    decrement?: any;
    numberLanes: number;
    circulation: number;
    stepNumberLanes: number,
    stepCirculation: number
    incrementNumberLanes: any;
    decrementNumberLanes: any;
    incrementCirculation: any;
    decrementCirculation: any;
}

type CalculatorChecked = {
    title: string,
    slug: string,
    options: [],
    countLanes: number,
    circulation: number
}

type DataClient = {
    fullName: string,
    phone: number,
    email: string,
    comment: string
}

type Payment = {
    companyName?: string,
    individualTaxpayerNumber: number, // ИНН
    codeReason: number, // КПП
    bankIdentificationCode: number, //БИК
    checkingAccount: number, // Р/счет
    correspondentAccount: number // Кс/счет
}

type Delivery = {
    type: "Доставка" | "Самовывоз",
    city: string,
    street: string,
    house: number,
    part: number,
    date: string | Date,
    comment?: string 
}


type Order = {
    id: string,
    options: CalculatorChecked,
    dataClient: DataClient,
    payment: Payment,
    delivery: Delivery
}

export const useCounterStore = create<CounterStore>((set) => ({
    calculationOptions: [],
    numberLanes: 1,
    circulation: 100,
    stepNumberLanes: 1,
    stepCirculation: 100,
    incrementNumberLanes: () => {
        set((state) => ({ numberLanes: state.numberLanes + state.stepNumberLanes }));       
    },
    decrementNumberLanes: () => {
        set((state) => ({ numberLanes: state.numberLanes - state.stepNumberLanes }));
    },
    incrementCirculation: () => {
        set((state) => ({ circulation: state.circulation + state.stepCirculation }));
    },
    decrementCirculation: () => {
        set((state) => ({ circulation: state.circulation - state.stepCirculation }));
    },
    getCalculationOptions: () => {
        set(() => ({calculationOptions: axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_BACKEND}/api/calculators/1`).then(res => res.data.data)}))
    }
}))

export const useOrdersStore = create((set) => ({
    id: "123",
    options: [
        {},
        {},
        {},
        {}
    ],
    dataClient: {
        fullName: "Номер",
        phone: 79091234334,
        email: "test@mail.ru",
        comment: "Хочу заказать печать"
    },
    payment: {
        companyName: "",
        individualTaxpayerNumber: null, // ИНН
        codeReason: null, // КПП
        bankIdentificationCode: null, //БИК
        checkingAccount: null, // Р/счет
        correspondentAccount: null // Кс/счет
    },
    delivery: {
        type: "Доставка",
        city: null,
        street: null,
        house: null,
        part: null,
        date: null,
        comment: "",
    }
}))