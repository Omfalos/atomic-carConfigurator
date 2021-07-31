import {IDict} from "../ducks/helpers";
import {ICarModel} from "../ducks/carModels/types";

export const mockCars: IDict<ICarModel> = {
    'sfdsad': {
        uid: 'sfdsad',
        displayName: 'Super model',
        availableEngines: ['aaa', 'bbb'],
        availableColors: ['sasas', 'sssasdsa', 'dadada', 'fooBar'],
        basePrice: 64000,
    },
    'sba': {
        uid: 'sba',
        displayName: 'base model',
        availableEngines: ['aaa', 'bbb', 'ccc', 'ddd'],
        availableColors: ['sasa', 'sssasdsa'],
        basePrice: 30000,
    }
}