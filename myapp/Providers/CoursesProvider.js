import React, {useReducer} from 'react'
import reducer from './../Reducers/CoursesReducer'
import {Loadtopnew, Loadtoprate} from './../Action/CoursesAction'  

const CoursesContext = React.createContext()

const initialstate =    {
   Topnew: null,
   Toprate: null
}

const CoursesProvider = (props)=>{
    const {state, dispatch} = useReducer(reducer, initialstate)

    return <CoursesContext.Provider value={{state, Loadtopnew: Loadtopnew(dispatch), Loadtoprate: Loadtoprate(dispatch)
    }}>
        {props.children}
    </CoursesContext.Provider>
}

export {CoursesContext, CoursesProvider}