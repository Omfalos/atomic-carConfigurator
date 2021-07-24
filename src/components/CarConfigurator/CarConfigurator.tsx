import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import logo from './logo.svg'
import styles from './CarConfigurator.module.css'
import { Button } from '../Button/Button'
import classNames from 'classnames'

const selectCarParts = (state: RootState) => {
  return {
    colors: Object.values(state.colors),
    engines: Object.values(state.engines),
    gears: Object.values(state.gears),
    carModels: Object.values(state.models),
    selectedColor: state.selectedCar.color,
    selectedModel: state.selectedCar.model,
    selectedEngine: state.selectedCar.engine,
    selecterGear: state.selectedCar.gearType,
  }
}

export const CarConfigurator: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const {
    colors,
    engines,
    gears,
    carModels,
    selectedModel,
    selectedEngine,
    selectedColor,
    selecterGear,
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
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.rightCol}>
        <div className={styles.list}>
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
              />
            )
          })}
        </div>

        <div className={styles.list}>
          {engines.map((engine) => {
            const isSelected =
              selectedEngine !== undefined &&
              selectedEngine !== null &&
              selectedEngine.uid === engine.uid
            return (
              <Button
                key={engine.uid}
                label={engine.displayName}
                isSelected={isSelected}
              />
            )
          })}
        </div>
        <div className={styles.list}>
          {gears.map((gear) => {
            const isSelected =
              selecterGear !== undefined &&
              selecterGear !== null &&
              selecterGear.uid === gear.uid
            return (
              <Button
                key={gear.uid}
                label={gear.displayName}
                isSelected={isSelected}
              />
            )
          })}
        </div>
        <div className={styles.list}>
          {colors.map((color) => {
            const isSelected =
              selectedColor !== undefined &&
              selectedColor !== null &&
              selectedColor.uid === color.uid
            return (
              <Button
                key={color.uid}
                label={color.displayName}
                isSelected={isSelected}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.leftCol}></div>
    </div>
  )
}
