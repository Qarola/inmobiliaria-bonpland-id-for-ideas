import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
    return(
        <div className="flex w-[100%] h-[80hv] justify-between items-center">
            <RegisterForm/>
            <img className="w-[40%]" src="assets/images/Register-img.png" alt="img"/>
        </div>
    )
}

export default Register