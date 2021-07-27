import React, {FC} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import styles from './SelectedCar.module.css';

const selectSelectedCar = (state: RootState) => ({
    engine: state.selectedCar.engine,
    model: state.selectedCar.model,
    color: state.selectedCar.color,
    gear: state.selectedCar.gearType,
})

export const SelectedCar: FC = () => {

    const {
        engine,
        model,
        color,
        gear,
    } = useSelector(selectSelectedCar)

    const price = (color?.price || 0) + (engine?.basePrice || 0) + (model?.basePrice || 0) + (gear?.price || 0)

    return <div className={styles.base}>
        <div className={styles.colorPreview} style={ color && color.color === '#ffffff' ? {backgroundColor:'#000'}: {}}>
            <FontAwesomeIcon icon={faCar} color={color?.color} size="8x"/>
        </div>
        <div className={styles.sumUp}>Price: {price}</div>
    </div>
}