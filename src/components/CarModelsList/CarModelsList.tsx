import React, {FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {Button} from "../Button/Button";
import {carActions} from "../../ducks/car/car";
import {ICarModel} from "../../ducks/carModels/types";


const selectCarModels = (state: RootState) => ({
    selectedModel: state.selectedCar.model,
    carModels: Object.values(state.models),
})

export const CarModelsList:FC = () => {
    const dispatch = useDispatch()
    const {selectedModel, carModels } = useSelector(selectCarModels)
    const selectCar = (model: ICarModel) => () => dispatch(carActions.setModel(model))

    return <>
        {carModels.map((model) => {
            const isSelected =
                selectedModel !== undefined &&
                selectedModel !== null &&
                selectedModel.uid === model.uid

            return (
                <Button
                    key={model.uid}
                    label={model.displayName}
                    isSelected={isSelected}
                    handleClick={selectCar(model)}
                />
            )
        })}
    </>


}
