import React from 'react'

import './Form.css'


const Form = (props) => {
    return(
        <form className="form-container">
            {props.children}
        </form>
    )
}


export default Form