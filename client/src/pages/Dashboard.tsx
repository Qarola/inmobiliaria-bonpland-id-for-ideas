import { useState, useEffect, useContext } from "react";
import {UserContext} from '../context/UserContext'
import UserProfile from '../components/Profile/UserProfile'
import AdminProfile from '../components/Profile/AdminProfile'

const Dashboard= () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    return(
        <div className="flex w-[100%] justify-center items-center overflow-hidden p-10">
            {user
            ?
            <div className="w-[100%]">
                {user.role === 'admin'
                ?
                <AdminProfile/>
                :
                <UserProfile/>
                }
            </div>
            :
            <div className="flex p-10 h-[80vh] justify-center items-center">
                <h1 className="text-4xl bold">ERROR 404</h1>
            </div>
            }
        </div>
    )
}

export default Dashboard