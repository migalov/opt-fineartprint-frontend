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
    step: number
}

export const useCounterStore = create<CounterStore>((set) => ({
    step: 1,
    count: 0,
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