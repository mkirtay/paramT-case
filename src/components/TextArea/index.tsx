import React from 'react'
import {Input as AntdInput} from "antd";
import './TextArea.scss';

interface ITextArea {
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const {TextArea} = AntdInput;

const Textarea: React.FC<ITextArea> = ({value, onChange, ...props}) => {
    return <TextArea className="textarea" onChange={(value) => onChange && onChange(value)}
                     value={value}/>
}

export default Textarea;
