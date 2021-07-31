import { ICarModel } from "../ducks/carModels/types";
import { IDict } from "../ducks/helpers";
import { ICarColor } from "../ducks/availableColors/types";
import { IGearModel } from "../ducks/gearModels/types";
import { IEngineModel } from "../ducks/engineModels/types";
import {mockEngine} from "../mockData/engine";
import {mockColors} from "../mockData/carColors";
import { mockCars } from "../mockData/models";
import {mockGears} from "../mockData/gearTypes";

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

export const carModelApi = new Api<IDict<ICarModel>>(() => Promise.resolve(mockCars), '')
export const carColorApi = new Api<IDict<ICarColor>>(() => Promise.resolve(mockColors), '')
export const gearApi = new Api<IDict<IGearModel>>(() => Promise.resolve(mockGears), '')
export const engineApi = new Api<IDict<IEngineModel>>(() => Promise.resolve(mockEngine), '')
