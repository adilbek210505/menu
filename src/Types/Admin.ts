


export interface IAdminState {
    menu: IValue[]
    value: Partial<IValue>
    file: string | ArrayBuffer | any
}

export type IValue = {
    title: string | any
    price: number | string | any
    image: string
    id?: string | number | any
    quantity?: number | any
}