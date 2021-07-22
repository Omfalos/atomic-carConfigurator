import {carModelReducer} from "../ducks/carModels/carModels";
import {combineReducers} from "redux";
import {carColorsReducer} from "../ducks/availableColors/availableColors";
import {engineModelReducer} from "../ducks/engineModels/engineModels";
import {gearModelReducer} from "../ducks/gearModels/gearModels";
import {carReducer} from "../ducks/car/car";

export const rootReducer = combineReducers({
    models: carModelReducer,
    colors: carColorsReducer,
    engines: engineModelReducer,
    gears: gearModelReducer,
    selectedCar: carReducer,
})

export type RootState = ReturnType<typeof rootReducer>