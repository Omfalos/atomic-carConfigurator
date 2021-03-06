import {ICarColor} from './types'
import {actionCreator, IDict} from '../helpers'
import {Reducer} from 'react'
import {carColorApi} from '../../api/api'
import {StrictEffect, call, put} from 'redux-saga/effects'

export enum ECarColorsActions {
    GET = 'getCarColor',
    SET = 'setCarColors',
    DELETE = 'deleteCarColor',
}

export const carColorsActions = {
    getCarModels: actionCreator<ECarColorsActions.GET>(ECarColorsActions.GET),
    deleteCarModels: actionCreator<ECarColorsActions.DELETE>(
        ECarColorsActions.DELETE,
    ),
    setCarModels: actionCreator<ECarColorsActions.SET, IDict<ICarColor>>(
        ECarColorsActions.SET,
    ),
}

type IActions = ReturnType<| typeof carColorsActions.getCarModels
    | typeof carColorsActions.setCarModels
    | typeof carColorsActions.deleteCarModels>

const carColorsInitialState: IDict<ICarColor> = {}

export const carColorsReducer: Reducer<IDict<ICarColor>, IActions> = (
    state = carColorsInitialState,
    action,
) => {
    switch (action.type) {
        case ECarColorsActions.DELETE:
            return {}
        case ECarColorsActions.SET:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function* carColorsFetchSaga(): Generator<StrictEffect,
    void,
    IDict<ICarColor>> {
    const data = yield call(carColorApi.fetch)
    if (data) {
        yield put(carColorsActions.setCarModels(data))
    }
}