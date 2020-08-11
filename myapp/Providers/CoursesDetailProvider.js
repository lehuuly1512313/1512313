import React, {useReducer} from 'react'
import reducer from './../Reducers/CoursesDetailReducer'
import {Loadtopnew, Loadtoprate} from './../Action/CoursesDetailAction'  

const CoursesDetailContext = React.createContext()

const initialstate =    {
    Courses: null,
    Teacher: null,
}

const CoursesDetailProvider = (props)=>{
    const {state, dispatch} = useReducer(reducer, initialstate)

    return <CoursesDetailContext.Provider value={{state, Loadtopnew: Loadtopnew(dispatch), Loadtoprate: Loadtoprate(dispatch)
    }}>
        {props.children}
    </CoursesDetailContext.Provider>
}

export {CoursesDetailContext, CoursesDetailProvider}