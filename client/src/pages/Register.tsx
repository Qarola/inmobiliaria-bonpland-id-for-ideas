import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
    return(
        <div className="flex w-[100%] h-[100%] justify-between items-center overflow-hidden">
            <RegisterForm/>
            <img className="w-[50%]" src="assets/images/Register-img.png" alt="img"/>
        </div>
    )
}

export default Register