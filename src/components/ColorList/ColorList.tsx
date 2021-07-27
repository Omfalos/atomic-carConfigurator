import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../ducks/car/car";
import {RootState} from "../../store/reducers";
import {ICarColor} from "../../ducks/availableColors/types";
import {ColorButton} from "../ColorButton/ColorButton.";


const selectColors = (state: RootState) => ({
    selectedModel: state.selectedCar.model,
    selectedColor: state.selectedCar.color,
    colors: Object.values(state.colors),
})

export const ColorList: FC = () => {
    const dispatch = useDispatch()
    const {colors, selectedColor, selectedModel} = useSelector(selectColors)

    const handleClick = (color: ICarColor) => () => dispatch(carActions.setColor(color))

    return <>
        {colors.map((color) => {
            const isSelected =
                selectedColor !== undefined &&
                selectedColor !== null &&
                selectedColor.uid === color.uid

            const isDisabled = !selectedModel || (selectedModel && !selectedModel?.availableColors.includes(color.uid))

            return (
                <ColorButton
                    key={color.uid}
                    color={color.color}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    handleClick={handleClick(color)}
                />
            )
        })}
    </>
}