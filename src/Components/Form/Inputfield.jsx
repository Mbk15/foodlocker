import React from 'react'
import './Inputfield.css'


const Inputfield = ({fieldType, fieldLabel, fieldId, handler}) => {

    return (
        <div className="field-container">
            <label htmlFor={fieldId}>{fieldLabel}</label>
            <input type={fieldType} id={fieldId} onChange={handler}/>
        </div>
    )

}

export default Inputfield;