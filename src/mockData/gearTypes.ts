import {IDict} from "../ducks/helpers";
import {IGearModel} from "../ducks/gearModels/types";

export const mockGears:IDict<IGearModel> = {
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
