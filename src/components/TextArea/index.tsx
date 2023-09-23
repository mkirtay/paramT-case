import React from 'react'
import {Input as AntdInput, InputProps} from "antd";
import './TextArea.scss';

interface ITextArea extends InputProps {
    value?: string,
    onChange?: any
}

const {TextArea} = AntdInput;

const Textarea: React.FC<ITextArea> = ({value, onChange, ...props}) => {
    return <TextArea className="textarea" onChange={(value) => onChange(value)}
                     value={value}/>
}

export default Textarea;
