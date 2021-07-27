import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../ducks/car/car";
import {IEngineModel} from "../../ducks/engineModels/types";
import {Button} from "../Button/Button";
import {RootState} from "../../store/reducers";


const selectEngines  = (state: RootState) => ({
    selectedModel: state.selectedCar.model,
    selectedEngine: state.selectedCar.engine,
    engines: Object.values(state.engines),
})

export const EngineList: FC = () => {
    const dispatch = useDispatch()
    const {engines, selectedEngine, selectedModel} = useSelector(selectEngines)

    const handleClick = (engine: IEngineModel) => () => dispatch(carActions.setEngine(engine))

    return <>
        {engines.map((engine) => {
            const isSelected =
                selectedEngine !== undefined &&
                selectedEngine !== null &&
                selectedEngine.uid === engine.uid

            const isDisabled = !selectedModel || (selectedModel && !selectedModel?.availableEngines.includes(engine.uid))

            return (
                <Button
                    key={engine.uid}
                    label={engine.displayName}
                    isSelected={isSelected}
                    handleClick={handleClick(engine)}
                    isDisabled={isDisabled}
                />
            )
        })}
    </>
}