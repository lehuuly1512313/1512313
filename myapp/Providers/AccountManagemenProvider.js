import React, {useReducer} from 'react'
import reducer from './../Reducers/AccountManagemenReducer'
import {ChangeInfo} from './../Action/AccountManagementAction'  

const AccountManagemenContext = React.createContext()

const initialstate =    {
    Account: null,
}

const AccountManagemenProvider = (props)=>{
    const {state, dispatch} = useReducer(reducer, initialstate)

    return <AccountManagemenContext.Provider value={{state, ChangeInfo: ChangeInfo(dispatch)
    }}>
        {props.children}
    </AccountManagemenContext.Provider>
}

export {AccountManagemenContext, AccountManagemenProvider}