import { SagaIterator } from 'redux-saga'
import {call} from 'redux-saga/effects'


const sayHello = (): void => {
    console.log('Hello')
}

export function* rootSaga():SagaIterator<void> {
    yield call(sayHello)
}
