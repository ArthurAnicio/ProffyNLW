import React, { InputHTMLAttributes } from "react";
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label : string;
    name: string;
    type: string;
}
const Input: React.FC<InputProps> = (props, ...rest) => {
    return(
    <div className='input-block'>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} id={props.name} {...rest} />
    </div>
    )
}

export default Input