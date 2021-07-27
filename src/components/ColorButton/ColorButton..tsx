import React, {FC} from "react";
import {IButton} from "../Button/Button";
import classNames from "classnames";
import styles from "./ColorButton.module.css";


interface IColorButton extends Omit<IButton, 'label'> {
    color: string,
}

export const ColorButton: FC<IColorButton> = ({
    handleClick = undefined,
    isDisabled = false,
    isSelected = false,
    color
}) => {
    const baseClass = classNames(styles.base, {
        [styles.base_isDisabled]: isDisabled,
        [styles.base_isSelected]: isSelected,
    })

    const onClick = () => {
        if(!isDisabled) {
            handleClick && handleClick()
        }
    }

    return <div className={baseClass} onClick={onClick} style={{backgroundColor: color}}/>
}

