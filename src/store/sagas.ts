import { SagaIterator } from 'redux-saga'
import {fork, all} from 'redux-saga/effects'
import {carModelFetchSaga} from "../ducks/carModels/carModels";

export function* rootSaga():SagaIterator<void> {
    yield all([
        yield fork(carModelFetchSaga)
    ])
}
