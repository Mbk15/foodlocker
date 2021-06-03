import React, { useState } from 'react'
import Form from '../Components/Form/Form';
import Inputfield from '../Components/Form/Inputfield'

import './styles/Register.css'


const Register = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        password: "",
        password2: ""

    });


    const handleInput = (e) => {
        setUserDetails({
            ...userDetails, 
            [e.target.id] :e.target.value
        });
    }

    return (
        <div className="registration-page-container">

            <h2 className="form-page-title">Register</h2>

            <Form>
                <Inputfield fieldType="text" fieldLabel="Name" fieldId="name" handler={handleInput}/>
                <Inputfield fieldType="email" fieldLabel="Email" fieldId="email" handler={handleInput}/>
                <Inputfield fieldType="tel" fieldLabel="Phone Number" fieldId="phone" handler={handleInput}/>
                <Inputfield fieldType="text" fieldLabel="Country" fieldId="country" handler={handleInput}/>
                <Inputfield fieldType="password" fieldLabel="Password" fieldId="password" handler={handleInput}/>
                <Inputfield fieldType="password" fieldLabel="Confirm Password" fieldId="password2" handler={handleInput}/>

                <input type="submit" value="Submit" className="submitbutton"/>
            </Form>

        </div>
    )
}

export default Register;