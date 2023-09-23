import React from 'react'
import classNames from "classnames";
import {Button as ButtonAntd, ButtonProps} from 'antd';
import './Button.scss';
interface IButton extends ButtonProps {
    full?: boolean,
    buttonType?: string
    iconLeft?: any,
}

const Button : React.FC<IButton> = ({ full, buttonType, iconLeft,  ...props }) => {
    return (
        <ButtonAntd {...props} className={classNames(props.className, `ant-btn--${buttonType}`, {
            'ant-btn--full': full,
            'ant-btn--icon-left': iconLeft,
        }
        )}>
            { iconLeft && <div>{iconLeft}</div> }
            {props.children}
        </ButtonAntd>
    )
}

export default Button;
