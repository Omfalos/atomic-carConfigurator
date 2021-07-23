import {ICarModel} from "./types";
import {actionCreator, IActionUnion, IDict} from "../helpers";
import {Reducer} from "react";
import {getEngines} from "../../api/api";
import {call, put, StrictEffect} from "redux-saga/effects";


export enum ECarModelActions {
    GET = 'getCarModels',
    SET = 'setCarModels',
    DELETE = 'deleteCarModels',
}

export const carModelActions = {
    getCarModels: actionCreator(ECarModelActions.GET),
    setCarModels: actionCreator<ECarModelActions, IDict<ICarModel>>(ECarModelActions.SET)
}

const carModelsInitialState:IDict<ICarModel> = {}
type IActions = IActionUnion<string, ICarModel, typeof carModelActions>

export const carModelReducer: Reducer<IDict<ICarModel>, IActions> = (state = carModelsInitialState, action ) => {
    switch (action.type) {
        case ECarModelActions.DELETE:
            return {}
        case ECarModelActions.SET:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function* carModelFetchSaga():Generator<StrictEffect, void, IDict<ICarModel>> {
    const data = yield call(getEngines.fetch)
    if(data) {
        yield put(carModelActions.setCarModels(data))
    }
}