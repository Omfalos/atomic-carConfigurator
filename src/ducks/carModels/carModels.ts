import {ICarModel} from "./types";
import {actionCreator, IDict} from "../helpers";

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
//TODO: ICarActionTyps should be define need to add IActionUnion
export const carModelReducer = (state = carModelsInitialState, action: {type: ECarModelActions, payload: undefined | IDict<ICarModel> } ): IDict<ICarModel> => {
    switch (action.type) {
        case ECarModelActions.DELETE:
            return {}
        case ECarModelActions.SET:
            return {...state, ...action.payload}
        default:
            return state
    }

}