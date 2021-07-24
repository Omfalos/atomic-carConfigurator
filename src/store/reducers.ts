import {carModelReducer} from "../ducks/carModels/carModels";
import {combineReducers} from "redux";
import {carColorsReducer} from "../ducks/availableColors/availableColors";
import {engineModelReducer} from "../ducks/engineModels/engineModels";
import {gearModelReducer} from "../ducks/gearModels/gearModels";
import {carReducer, ICarState} from "../ducks/car/car";
import { ICarModel } from "../ducks/carModels/types";
import { ICarColor } from "../ducks/availableColors/types";
import { IDict } from "../ducks/helpers";
import { IEngineModel } from "../ducks/engineModels/types";
import { IGearModel } from "../ducks/gearModels/types";

export const rootReducer = combineReducers({
    models: carModelReducer,
    colors: carColorsReducer,
    engines: engineModelReducer,
    gears: gearModelReducer,
    selectedCar: carReducer,
})

export interface RootState {
    models: IDict<ICarModel>,
    colors: IDict<ICarColor>,
    engines: IDict<IEngineModel>,
    gears: IDict<IGearModel>,
    selectedCar: ICarState,
}