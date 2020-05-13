import React, {Component} from 'react'
import Start from './Components/Authentication/Start'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import ForgetPass from './Components/Authentication/ForgetPass'
import Download from './Components/Main/Download'
import ListCourses from './Components/Courses/ListCourses'
import CoureseDetail from './Components/CoursesDetail/CoureseDetail'
import Profile from './Components/Account Management/Profile'
import Search from './Components/Main/Search'

export default class App extends Component{
  render()
  {
    return(
      <Search></Search>
    )
  }
}