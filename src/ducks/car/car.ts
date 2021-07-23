import {actionCreator, IActionUnion} from "../helpers";
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
    setModel: actionCreator<typeof ECarActions.SET_MODEL, ICarModel | null>(ECarActions.SET_MODEL),
    setEngine: actionCreator<typeof ECarActions.SET_ENGINE, IEngineModel | null>(ECarActions.SET_ENGINE),
    setGearType: actionCreator<typeof ECarActions.SET_GEAR_TYPE, IGearModel | null>(ECarActions.SET_GEAR_TYPE),
    setColor: actionCreator<typeof ECarActions.SET_COLOR, ICarColor | null>(ECarActions.SET_COLOR),
}

export interface ICarState {
    model: ICarModel | null | undefined,
    engine: IEngineModel | null | undefined,
    gearType: IGearModel | null | undefined,
    color: ICarColor | null | undefined,
}

const carInitialState:ICarState = {
    model: null,
    engine: null,
    gearType: null,
    color: null,
}

type IActions = IActionUnion<string, ICarModel | IEngineModel | IGearModel | ICarColor | null,  typeof carActions>

export const carReducer: Reducer<ICarState, IActions> = (state = carInitialState, action) => {
    switch (action.type) {
        case ECarActions.SET_MODEL:
            return {
                ...state,
                model: action.payload,
            }
        case ECarActions.SET_COLOR:
            return {
                ...state,
                color: action.payload,
            }
        case ECarActions.SET_GEAR_TYPE:
            return {
                ...state,
                gearType: action.payload,
            }
        case ECarActions.SET_ENGINE:
            return {
                ...state,
                engine: action.payload,
            }
        default:
            return state
    }

}