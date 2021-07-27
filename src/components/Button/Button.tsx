import React, {FC} from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

export interface IButton {
    handleClick?: () => void,
    isDisabled?: boolean,
    isSelected?: boolean,
    label: string,
}

export const Button: FC<IButton> = ({
    handleClick = undefined,
    isDisabled = false,
    isSelected = false,
    label,
}) => {
    const baseClass = classNames(styles.base, {
        [styles.base_isDisabled]: isDisabled,
        [styles.base_isSelected]: isSelected,
    })

    const onClick = () => {
        if (!isDisabled) {
            handleClick && handleClick()
        }
    }

    return (
        <div className={baseClass} onClick={onClick}>
            {label}
        </div>
    )
}
