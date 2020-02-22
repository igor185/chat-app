// define interface
export interface IItems {
    id: string,
    descriptions: string,
    isComplete: boolean
}

export default interface ITodos {
    items: IItems[]
}