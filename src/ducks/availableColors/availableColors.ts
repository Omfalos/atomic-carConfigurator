import {ICarColor} from "./types";
import {actionCreator, IDict} from "../helpers";
import {Reducer} from "react";

export enum ECarColorsActions {
    GET = 'getCarColor',
    SET = 'setCarColor',
    DELETE = 'deleteCarColor',
}

export const carColorsActions = {
    getCarModels: actionCreator<ECarColorsActions.GET>(ECarColorsActions.GET),
    deleteCarModels: actionCreator<ECarColorsActions.DELETE>(ECarColorsActions.DELETE),
    setCarModels: actionCreator<ECarColorsActions.SET, IDict<ICarColor>>(ECarColorsActions.SET)
}

type IActions = ReturnType<typeof carColorsActions.getCarModels | typeof carColorsActions.setCarModels | typeof carColorsActions.deleteCarModels>

const carColorsInitialState:IDict<ICarColor> = {}

export const carColorsReducer:Reducer<IDict<ICarColor>, IActions> = (state = carColorsInitialState, action) => {
    switch (action.type) {
        case ECarColorsActions.DELETE:
            return {}
        case ECarColorsActions.SET:
            return {...state, ...action.payload}
        default:
            return state
    }

}