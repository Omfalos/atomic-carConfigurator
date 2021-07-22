import {IEngineModel} from "./types";
import {actionCreator, IDict} from "../helpers";
import {Reducer} from "react";

export enum EEngineModelActions {
    GET = 'getEngineModels',
    SET = 'setEngineModels',
    DELETE = 'deleteEngineModels',
}

export const engineModelsActions = {
    getCarModels: actionCreator<EEngineModelActions.GET>(EEngineModelActions.GET),
    deleteCarModel: actionCreator<EEngineModelActions.DELETE>(EEngineModelActions.DELETE),
    setCarModels: actionCreator<EEngineModelActions.SET, IDict<IEngineModel>>(EEngineModelActions.SET)
}

const engineModelsInitialState:IDict<IEngineModel> = {}

type IActions = ReturnType<typeof engineModelsActions.getCarModels | typeof engineModelsActions.setCarModels | typeof engineModelsActions.deleteCarModel>

export const engineModelReducer: Reducer<IDict<IEngineModel>, IActions> = (state = engineModelsInitialState, action )=> {
    switch (action.type) {
        case EEngineModelActions.DELETE:
            return {}
        case EEngineModelActions.SET:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}