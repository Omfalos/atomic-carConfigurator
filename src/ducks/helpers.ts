interface IDuckAction<T extends string> {
    type: T
}

interface IDuckActionWIthPayload<T extends string, P> extends IDuckAction<T> {
    payload?: P | null
}

export type IDuckActionFn<T extends string> = () => IDuckAction<T>
export type IDuckActionWithPayloadFn<T extends string, P> = (payload?: P) => IDuckActionWIthPayload<T, P>

export function actionCreator< T extends string>(actionName: T): IDuckActionFn<T>
export function actionCreator<T extends string, P>(actionName: T): IDuckActionWithPayloadFn<T, P>
export function actionCreator<T extends string, P>(actionName: T){
    return (payload?: P): IDuckAction<T> | IDuckActionWIthPayload<T, P>  => {
        if(payload) {
            return {
                type: actionName,
                payload,
            }
        }

        return {type: actionName}
    }
}

export type IActionCreatorMap<T extends string, P> = {[actionCreator: string]: IDuckActionFn<T> | IDuckActionWithPayloadFn<T, P>}
export type IActionUnion<T extends string, P ,A extends IActionCreatorMap<T, P>> = ReturnType<A[keyof A]>

export interface IDict<T> {
    [key: string]: T,
}