import React, {Component} from 'react'
import Start from './Components/Authentication/Start'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import ForgetPass from './Components/Authentication/ForgetPass'
import Download from './Components/Main/Download'
import ListCourses from './Components/Courses/ListCourses'
import CoureseDetail from './Components/CoursesDetail/CoureseDetail'
import Profile from './Components/Account Management/Profile'
import Sum from './Components/Main/Sum'
import Browser from './Components/Main/Browser'
import Screen from './Components/MainScreen/Screen'
import Setting from './Components/Account Management/Setting'
import Videoplayer from './Components/Others/Videoplayer'
import Subscription from './Components/Others/Subscription'
import Splashscreen from './Components/Others/Splashscreen'
import {Mycontext} from './Context/Mycontext'
import { MenuProvider } from 'react-native-popup-menu';


export default class App extends Component{

  constructor(props){
    super(props)
    this.toggleAccount = (Account) => {
      this.setState({
        Account
      })
    }  
    this.toggleTeacher = (Teacher) => {
      this.setState({
        Teacher
      })
    }  

    this.toggleCourses = (Courses) => {
      this.setState({
        Courses
      })
    }  

    this.toggleVideo = (Video)=>{
      this.setState({
        Video
      })
    }
    this.state={
      Account: null,
      Teacher: null,
      Courses: null,
      Video: null,
      toggleAccount: this.toggleAccount,
      toggleTeacher: this.toggleTeacher,
      toggleCourses: this.toggleCourses,
      toggleVideos: this.toggleVideo
    }

  }

  render()
  {
    console.disableYellowBox = true;
    return(

      <Mycontext.Provider value={this.state}>
        <MenuProvider>
          <Screen ></Screen>
          </MenuProvider> 
      </Mycontext.Provider>
    )
  }
}