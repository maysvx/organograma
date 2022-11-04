import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {

    const whenTyped = (evento) => {
        props.whenChanging(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.data}
                onChange={whenTyped}
                type="text"
                placeholder={props.placeholder}
                required={props.obrigatorio}>
            </input>
        </div>
    )

}
export default TextField;