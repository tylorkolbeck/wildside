import React from 'react'
import './Input.css'

const input = props => {
    let inputElement = null
    const inputClasses = []
    let validationError = null

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('badInput')
    }

    switch (props.elementType) {
        case('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
            break;
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
            break;
        default: 
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>
    }
    return ( 
        <div>
            {validationError ? validationError : null}
            <label>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default input
