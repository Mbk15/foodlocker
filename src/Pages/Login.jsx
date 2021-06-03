import React, { useState } from 'react'
import Form from '../Components/Form/Form';
import Inputfield from '../Components/Form/Inputfield';


const Login = () => {

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""

    });


    const handleInput = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value
        });
    }

    return (
        <div className="login-page-container">

            <h2 className="form-page-title">Login</h2>

            <Form>
                <Inputfield fieldType="email" fieldLabel="Email" fieldId="email" handler={handleInput} />
                <Inputfield fieldType="password" fieldLabel="Password" fieldId="password" handler={handleInput} />
                <input type="submit" value="Submit" className="submitbutton" />
            </Form>

        </div>
    )
}

export default Login;