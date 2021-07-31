import {IDict} from "../ducks/helpers";
import {ICarColor} from "../ducks/availableColors/types";

export const mockColors:IDict<ICarColor> = {
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