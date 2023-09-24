"use client"
import React, {useState, useRef, useEffect, MutableRefObject} from 'react'
import {Input as AntdInput, InputProps, InputRef} from "antd";
import classNames from "classnames";
import './Input.scss';

interface IInput extends InputProps {
    label?: string,
    value?: string | number,
    inputIconLeft? : React.ReactNode
}


const Input : React.FC<IInput> = ({ inputIconLeft, label, value, ...props }) => {
    const [inputDirty, setInputDirty] = useState<boolean>(false);
    const inputRef : React.RefObject<any> = useRef();

    useEffect(() => {
        if (inputRef?.current?.input?.value.length > 0 ) {
            setInputDirty(true)
        }
    }, [inputRef.current])

    const onFocusInput = () => {
        setInputDirty(true)
    }
    const onBlurInput = (e : React.FocusEvent<HTMLInputElement>) => {
        if ( e.target.value.length === 0 ) {
            setInputDirty(false)
        } else {
            setInputDirty(true)
        }
    }


    return (
        <div className={classNames('input', {'input--readonly': props.readOnly, 'input--left-icon': inputIconLeft})}>
            <AntdInput
                onBlur={onBlurInput}
                onFocus={onFocusInput}
                ref={inputRef}
                {...props}
                className={classNames({'focused': inputDirty})}
                value={value}>
            </AntdInput>
            {inputIconLeft && inputIconLeft}
            {props.children}
            <label>{label}</label>
        </div>
    )
}


export default Input;
