import { SagaIterator } from 'redux-saga'
import { fork, all } from 'redux-saga/effects'
import { carColorsFetchSaga } from '../ducks/availableColors/availableColors'
import { carModelFetchSaga } from '../ducks/carModels/carModels'
import { engineFetchSaga } from '../ducks/engineModels/engineModels'
import { gearsFetchSaga } from '../ducks/gearModels/gearModels'

export function* rootSaga(): SagaIterator<void> {
  yield all([
    yield fork(carModelFetchSaga),
    yield fork(carColorsFetchSaga),
    yield fork(gearsFetchSaga),
    yield fork(engineFetchSaga),
  ])
}
