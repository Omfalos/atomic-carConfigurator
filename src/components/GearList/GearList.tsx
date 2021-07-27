import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../ducks/car/car";
import {Button} from "../Button/Button";
import {RootState} from "../../store/reducers";
import {IGearModel} from "../../ducks/gearModels/types";


const selectGearData  = (state: RootState) => ({
    selectEngine: state.selectedCar.engine,
    selectedGear: state.selectedCar.gearType,
    gears: Object.values(state.gears),
})

export const GearList: FC = () => {
    const dispatch = useDispatch()
    const {gears, selectedGear, selectEngine} = useSelector(selectGearData)

    const handleClick = (gear: IGearModel) => () => dispatch(carActions.setGearType(gear))

    return (<>
        {gears.map((gear) => {
            const isSelected =
                selectedGear !== undefined &&
                selectedGear !== null &&
                selectedGear.uid === gear.uid

            const isDisabled = !selectEngine || (selectEngine && !selectEngine?.availableGearTypes.includes(gear.uid))

            return (
                <Button
                    key={gear.uid}
                    label={gear.displayName}
                    isSelected={isSelected}
                    handleClick={handleClick(gear)}
                    isDisabled={isDisabled}
                />
            )
        })}
    </>)
}