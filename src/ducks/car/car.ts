import {actionCreator} from "../helpers";
import {ICarModel} from "../carModels/types";
import {IEngineModel} from "../engineModels/types";
import {IGearModel} from "../gearModels/types";
import {ICarColor} from "../availableColors/types";
import {Reducer} from "react";

export enum ECarActions {
    SET_MODEL = 'setCarModel',
    SET_ENGINE = 'setEngine',
    SET_GEAR_TYPE = 'setGearType',
    SET_COLOR = 'setCarColor',
}

export const carActions = {
    setModel: actionCreator<ECarActions.SET_MODEL, ICarModel>(ECarActions.SET_MODEL),
    setEngine: actionCreator<ECarActions.SET_ENGINE, IEngineModel>(ECarActions.SET_ENGINE),
    setGearType: actionCreator<ECarActions.SET_GEAR_TYPE, IGearModel>(ECarActions.SET_GEAR_TYPE),
    setColor: actionCreator<ECarActions.SET_COLOR, ICarColor>(ECarActions.SET_COLOR),
}

export interface ICarState {
    model: ICarModel | null,
    engine: IEngineModel | null,
    gearType: IGearModel | null,
    color: ICarColor | null,
}

const carInitialState:ICarState = {
    model: null,
    engine: null,
    gearType: null,
    color: null,
}

type IActions = ReturnType<typeof carActions.setModel | typeof carActions.setEngine | typeof carActions.setGearType | typeof carActions.setColor>

export const carReducer: Reducer<ICarState, IActions> = (state = carInitialState, action) => {
    switch (action.type) {
        case ECarActions.SET_MODEL:
            return {
                ...state,
                model: action.payload
            }
        case ECarActions.SET_COLOR:
            return {
                ...state,
                color: action.payload
            }
        case ECarActions.SET_GEAR_TYPE:
            return {
                ...state,
                gearType: action.payload,
            }
        case ECarActions.SET_ENGINE:
            return {
                ...state,
                engine: action.payload
            }
        default:
            return state
    }

}