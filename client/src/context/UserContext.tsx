import { createContext, useState, children, useEffect } from 'react';

interface UserContextType {
  user: any | null;
  log_user: (data: any) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  log_user: () => {},
});

const userLocal = JSON.parse(sessionStorage.getItem('user')) || null;

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(userLocal)

    const log_user = (data) =>{
        setUser(data)
    }

    useEffect(() =>{
        sessionStorage.setItem("user", JSON.stringify(user))
    },[user])

    return(
    <UserContext.Provider
    value={{
    user,
    log_user,
    }}>
        {children}
    </UserContext.Provider>
    )
}