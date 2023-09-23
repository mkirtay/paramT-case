import React, {useEffect, useRef, useState} from "react";
import {MaskedInput} from "antd-mask-input";
import classNames from "classnames";
import {Input as AntdInput, InputProps} from "antd";

interface IInput extends InputProps {
    label?: string,
    mask: string,
    numeric?: boolean,
    value?: any
    onChange?: any
}

const MaskInput : React.FC<IInput> = ({ label, value, mask, numeric, onChange, ...props })=>{
    const [inputDirty, setInputDirty] = useState<boolean>(true);
    const inputRef : React.RefObject<any> = useRef();

    const onFocusInput = (e:any) => {
        setInputDirty(true)
    }
    const onBlurInput = (e: any) => {
        if ( e.target.value.length === 0 ) {
            setInputDirty(false)
        } else {
            setInputDirty(true)
        }
    }

    const onChangeFunc = (e:any) => {
        onChange(e.unmaskedValue)
    }

    return (
        <div className={classNames('input input--masked', {'input--readonly': props.readOnly})}>
            <MaskedInput
                onBlur={onBlurInput}
                onFocus={onFocusInput}
                onChange={onChangeFunc}
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
