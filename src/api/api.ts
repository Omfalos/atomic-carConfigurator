import { ICarModel } from "../ducks/carModels/types";
import { IDict } from "../ducks/helpers";
import { ICarColor } from "../ducks/availableColors/types";
import { IGearModel } from "../ducks/gearModels/types";
import { IEngineModel } from "../ducks/engineModels/types";

type IFetchFn<T> = (path?: string) => Promise<T | undefined>

interface IApi<T> {
    fetch: IFetchFn<T>,
    readonly _path: string,
    readonly _fetch: IFetchFn<T>
}


export class Api<T> implements IApi<T> {
    readonly _fetch: IFetchFn<T>;
    readonly _path: string;
    constructor(fetchFn: IFetchFn<T>, path: string) {
        this._fetch = fetchFn
        this._path = path
    }

    fetch = async () => {
        try {
            const data = await this._fetch(this._path)
            return data
        } catch (error) {
            console.error(error)
        }
    }
}

const mockCars = {
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

const mockColors = {
    'sasa': {
        uid: 'sasa',
        price: 0,
        displayName: 'white',
        color: '#ffffff',
    },
    'sasas': {
        uid: 'sasas',
        price: 1000,
        displayName: 'red',
        color: '#ff0000',
    },
    'sssasdsa': {
        uid: 'sssasdsa',
        price: 2000,
        displayName: 'green',
        color: '#00ff00',
    },
    'dadada': {
        uid: 'dadada',
        price: 4000,
        displayName: 'deep purple',
        color: '#230b44',
    },
    'fooBar': {
        uid: 'fooBar',
        price: 10000,
        displayName: 'dark orange',
        color: '#904b19',
    }
}

const mockGears = {
    'automaticSuper': {
        uid: 'automaticSuper',
        displayName: 'Super Automatic',
        price: 1500,
    },
    'manualStandard': {
        uid: 'manualStandard',
        displayName: 'Manual Base',
        price: 0,
    }
}

const mockEngine = {
    'aaa': {
        uid: 'aaa',
        displayName: 'super cool ultra engine',
        availableGearTypes: ['automaticSuper'],
        basePrice: 15000,
    },
    'bbb': {
        uid: 'bbb',
        displayName: 'cool ultra engine',
        availableGearTypes: ['automaticSuper'],
        basePrice: 10000,
    },
    'ccc': {
        uid: 'ccc',
        displayName: 'cool engine',
        availableGearTypes: ['automaticSuper', 'manualStandard' ],
        basePrice: 5000,
    },
    'ddd': {
        uid: 'ddd',
        displayName: 'engine',
        availableGearTypes: ['manualStandard'],
        basePrice: 0,
    },
    'eee': {
        uid: 'eee',
        displayName: 'super cool ultra engine',
        availableGearTypes: ['automaticSuper'],
        basePrice: 15000,
    },
    'fff': {
        uid: 'fff',
        displayName: 'cool ultra engine',
        availableGearTypes: ['automaticSuper'],
        basePrice: 10000,
    },
    'ggg': {
        uid: 'ggg',
        displayName: 'cool engine',
        availableGearTypes: ['automaticSuper', 'manualStandard' ],
        basePrice: 5000,
    },
    'hhh': {
        uid: 'hhh',
        displayName: 'engine',
        availableGearTypes: ['manualStandard'],
        basePrice: 0,
    }

}

export const carModelApi = new Api<IDict<ICarModel>>(() => Promise.resolve(mockCars), '')
export const carColorApi = new Api<IDict<ICarColor>>(() => Promise.resolve(mockColors), '')
export const gearApi = new Api<IDict<IGearModel>>(() => Promise.resolve(mockGears), '')
export const engineApi = new Api<IDict<IEngineModel>>(() => Promise.resolve(mockEngine), '')
