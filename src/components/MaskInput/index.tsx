import React, {useRef, useState} from "react";
import {MaskedInput} from "antd-mask-input";
import classNames from "classnames";
import {InputProps} from "antd";

interface IInput extends InputProps {
    label?: string,
    mask: string,
    numeric?: boolean,
    value?: string
    onChange?: any,

    compClassName?: string,
}

const MaskInput : React.FC<IInput> = ({ label, value, compClassName, mask, numeric, onChange, ...props }, className)=>{
    const [inputDirty, setInputDirty] = useState<boolean>(true);
    const inputRef : React.RefObject<any> = useRef();

    const onFocusInput = () => {
        setInputDirty(true)
    }
    const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
        if ( e.target.value.length === 0 ) {
            setInputDirty(false)
        } else {
            setInputDirty(true)
        }
    }

    const onChangeFunc = (e: string) => {
        onChange(e)
    }

    return (
        <div className={classNames('input input--masked', compClassName, {'input--readonly': props.readOnly})}>
            <MaskedInput
                onBlur={onBlurInput}
                onFocus={onFocusInput}
                onChange={(e) => onChangeFunc(e.unmaskedValue)}
                ref={inputRef}
                value={value}
                className={classNames({ 'focused show': inputDirty })}
                mask={mask}
            />
            <label>{label}</label>
        </div>

    );
};

export default MaskInput;
