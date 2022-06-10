import React, { Component, useState, createContext } from 'react';
const UserContext = createContext();

const UserProvider = ({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(true)
    const [localStore, setLocalStore] = useState()
     const [firstTime, setFirstTime] = useState(true)
    const[userData, setUserData] = useState({
        firstName: "Nelson",
        lastName:"Uhembe"
    })

    //get user data from local storeage and setUserData

    return(
        <UserContext.Provider value={{
            isAuthenticated, 
            setIsAuthenticated,
            userData,
            setUserData,
            firstTime, 
            setFirstTime
        }}>
           {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider};
