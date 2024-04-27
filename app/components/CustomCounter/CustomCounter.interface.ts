export interface ICustomCounter {
    name: string,
    value: number,
    minValue: number,
    maxValue: number,
    onChange: any,
    label: string,
    step: number
}