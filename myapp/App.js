import React, {Component} from 'react'
import Start from './Components/Authentication/Start'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import ForgetPass from './Components/Authentication/ForgetPass'
import Download from './Components/Main/Download'
import ListCourses from './Components/Courses/ListCourses'
import CoureseDetail from './Components/CoursesDetail/CoureseDetail'

export default class App extends Component{
  render()
  {
    return(
      <CoureseDetail></CoureseDetail>
    )
  }
}