import React, {useReducer} from 'react'
import reducer from './../Reducers/AuthenticationReducer'
import {Login, LoginWithGoogle} from './../Action/AuthenticationAction'  

const AuthenticationContext = React.createContext()

const initialstate =    {
    Account: null,
    Token: null,
    Password: ''
}

const AuthenticationProvider = (props)=>{
    const {state, dispatch} = useReducer(reducer, initialstate)

    return <AuthenticationContext.Provider value={{state, login: Login(dispatch), LoginWithGoogle: LoginWithGoogle(dispatch)
    }}>
        {props.children}
    </AuthenticationContext.Provider>
}

export {AuthenticationContext, AuthenticationProvider}