import React, {FC, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store/reducers'
import logo from './logo.svg'
import styles from './CarConfigurator.module.css'
import classNames from 'classnames'
import {CarModelsList} from "../CarModelsList/CarModelsList";
import { EngineList } from '../EngineList/EngineList'
import {GearList} from "../GearList/GearList";
import {ColorList} from "../ColorList/ColorList";
import {SelectedCar} from "../SelectedCar/SelectedCar";


const selectCarParts = (state: RootState) => {
    return {
        colors: Object.values(state.colors),
        engines: Object.values(state.engines),
        gears: Object.values(state.gears),
        carModels: Object.values(state.models),
        selectedColor: state.selectedCar.color,
        selectedGear: state.selectedCar.gearType,
    }
}

export const CarConfigurator: FC = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const {
        colors,
        engines,
        gears,
        carModels,
    } = useSelector(selectCarParts)

    useEffect(() => {
        if (
            !isLoaded &&
            colors.length &&
            engines.length &&
            gears.length &&
            carModels.length
        ) {
            setIsLoaded(true)
        }
    }, [colors, engines, gears, carModels, isLoaded])

    const baseClass = classNames(styles.base, {
        [styles.base_isLoaded]: isLoaded,
    })

    return (
        <div className={baseClass}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <div className={styles.app}>
                <div className={styles.rightCol}>
                    <span className={styles.title}>Atomic car configurator</span>
                    <span className={styles.label}>Car models:</span>
                    <div className={styles.list}>
                        <CarModelsList/>
                    </div>
                    <span className={styles.label}>Engines:</span>
                    <div className={styles.list}>
                        <EngineList />
                    </div>
                    <span className={styles.label}>Gear types:</span>
                    <div className={styles.list}>
                        <GearList />
                    </div>
                    <span className={styles.label}>Colors:</span>
                    <div className={styles.list}>
                        <ColorList />
                    </div>
                </div>
                <div className={styles.leftCol}>
                    {isLoaded && <SelectedCar />}
                </div>
            </div>
        </div>
    )
}
