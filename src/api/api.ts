import {ICarModel} from "../ducks/carModels/types";
import { IDict } from "../ducks/helpers";

type IFetchFn <T> = (path?: string) =>  Promise<T | undefined>

interface IApi<T> {
    fetch: IFetchFn<T>,
    readonly _path: string,
    readonly _fetch: IFetchFn<T>
}


export class Api<T> implements IApi<T> {
    readonly _fetch: IFetchFn<T>;
    readonly _path: string;
    constructor(fetchFn: IFetchFn<T>, path: string ) {
        this._fetch = fetchFn
        this._path = path
    }

    fetch = async () => {
        try {
            const data = await this._fetch(this._path)
            return data
        } catch(error) {
            console.error(error)
        }
    }
}

const mockEngines = {
    'sfdsad': {
        uid: 'sfdsad',
        displayName: 'Super model',
        availableEngines: ['aaa', 'bbb'],
        availableColors: ['sasa', 'sssasdsa'],
        basePrice: 64000,
    }
}

export const getEngines = new Api<IDict<ICarModel>>(() => Promise.resolve(mockEngines), '')
