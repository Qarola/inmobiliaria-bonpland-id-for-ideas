import { useState, useEffect, useContext } from "react";
import {UserContext} from '../context/UserContext'
import Profile from '../components/Profile/Profile'
import AdminProfile from '../components/Profile/AdminProfile'

const Dashboard= () => {
    const {user} = useContext(UserContext)

    return(
        <div className="flex flex-col w-[100%] justify-center items-center overflow-hidden p-10 gap-10">
            {user
            ?
            <div className="w-[100%]">
                <Profile user={user}/>
            </div>
            :
            <div className="flex p-10 min-h-[80vh] justify-center items-center">
                <h1 className="text-4xl bold">ERROR 404</h1>
            </div>
            }
        </div>
    )
}

export default Dashboard