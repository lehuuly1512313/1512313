import React, {useReducer} from 'react'
import reducer from './../Reducers/AuthorsReducer'
import {Load} from './../Action/AuthorsAction'  

const AuthorsContext = React.createContext()

const initialstate =    {
   Teacher: null
}

const AuthorsProvider = (props)=>{
    const {state, dispatch} = useReducer(reducer, initialstate)

    return <AuthorsContext.Provider value={{state, Load: Load(dispatch)
    }}>
        {props.children}
    </AuthorsContext.Provider>
}

export {AuthorsContext, AuthorsProvider}