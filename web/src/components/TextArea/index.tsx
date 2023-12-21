import React, { TextareaHTMLAttributes } from "react";
import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label : string;
    name?: string;
    
}
const TextArea: React.FC<TextAreaProps> = (props, ...rest) => {
    return(
    <div className='Textarea-block'>
        <label htmlFor={props.name}>{props.label}</label>
        <textarea  id={props.name} {...rest} />
    </div>
    )
}

export default TextArea