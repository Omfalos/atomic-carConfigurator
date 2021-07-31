import {IDict} from "../ducks/helpers";
import {IEngineModel} from "../ducks/engineModels/types";

export const mockEngine: IDict<IEngineModel> = {
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