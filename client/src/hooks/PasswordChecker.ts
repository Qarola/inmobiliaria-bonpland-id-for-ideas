const PasswordChecker = (password1, password2) => {
    if(password1 !== password2){
        return('Error1')
    }
    else{
        if((password1.length < 8) || (password1.length > 12)){
            return('Error2')
        }
        else{
            return('Ok')
        }
    }
}

export default PasswordChecker