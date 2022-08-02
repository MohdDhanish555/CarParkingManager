import { Dispatch } from "react";

export type CarDetailsType = {
    slot : number
    carNumber: string
    date: Date
    charge?: number
}

export type StateType = {
    parkingSpaceCount: string;
    carNumber: string;
    carDetails: CarDetailsType[]
    currentCarDetails : any
    showSnackbar: boolean
    showModal: boolean
    totalPrice:number
};
  
export type ActionType = {
    type: string;
    payload: any;
};
  
export type AppContextType = {
    state: any,
    dispatch : Dispatch<ActionType>
}
  
export type SlotProps = {
    slotNo: number,
    key: number,
    occupied : boolean
  }
  