import LoginForm from '../components/Forms/LoginForm';

const Login = () => {
    return(
        <div className="flex w-[100%] h-[100%] justify-between items-center overflow-hidden">
            <LoginForm/>
            <img className="w-[50%]" src="assets/images/Register-img.png" alt="img"/>
        </div>
    )
}

export default Login