import {IGearModel} from "./types";
import {actionCreator, IDict} from "../helpers";
import { gearApi } from "../../api/api";
import { StrictEffect, put, call } from "redux-saga/effects";
export enum EGearModelActions {
    GET = 'getGearModels',
    SET = 'setGearModels',
    DELETE = 'deleteGearModels',
}

export const gearModelsActions = {
    getCarModels: actionCreator(EGearModelActions.GET),
    setCarModels: actionCreator<EGearModelActions, IDict<IGearModel>>(EGearModelActions.SET)
}

const gearModelsInitialState:IDict<IGearModel> = {}

export const gearModelReducer = (state = gearModelsInitialState, action: {type: EGearModelActions, payload: undefined | IDict<IGearModel> } ): IDict<IGearModel> => {
    switch (action.type) {
        case EGearModelActions.DELETE:
            return {}
        case EGearModelActions.SET:
            return {...state, ...action.payload}
        default:
            return state
    }

}

export function* gearsFetchSaga(): Generator<StrictEffect, void, IDict<IGearModel>> {
    const data = yield call(gearApi.fetch)
    if (data) {
        yield put(gearModelsActions.setCarModels(data))
    }
}