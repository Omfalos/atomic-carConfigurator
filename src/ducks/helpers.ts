export function actionCreator<T>(actionName: T): () => {type: T}
export function actionCreator<T, P>(actionName: T): (payload: P) => {type: T, payload: P}
export function actionCreator<T, P>(actionName: T){
    return (payload?: P) => {
        if(payload) {
            return {
                type: actionName,
                payload,
            }
        }

        return {type: actionName}
    }
}

export interface IDict<T> {
    [key: string]: T,
}