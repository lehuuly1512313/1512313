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
import {Theme} from './Data/Theme'


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

    this.toggledownload = (item)=>{
      var {download} = this.state;
      item.download = true
      download.push(item)
      this.setState({download})
    }

    this.toggleyourCourses = (item)=>{
      var {yourCourses} = this.state;
      item.channel = true
      yourCourses.push(item)
      this.setState({yourCourses})
    }

    this.toggleAuthorsfollowed = (item)=>{
      var {Authorsfollowed} = this.state;
      item.channel = true
      Authorsfollowed.push(item)
      this.setState({Authorsfollowed})
    }

    this.toggleyourvideo = (item)=>{
      var {yourvideo} = this.state;
      item.channel = true
      yourvideo.push(item)
      this.setState({yourvideo})
    }

    this.fdownload = (download) =>{
      this.setState({download})
    }

    this.fHistory = (history)=>{
      this.setState({history})
    }

    this.toggleHistory = (item)=>{
      var {history} = this.state
      history.push(item)
      this.setState({history})
    }


    this.togglesearchkey = (searchkey)=>{
      this.setState({searchkey})
    }

    this.toggleTheme = (Theme)=>{
      this.setState({Theme})
    }

    this.fyourvideo = (yourvideo)=>{
      this.setState({yourvideo})
    }

    this.fyourCourses = (yourCourses)=>{
      this.setState({yourCourses})
    }

    this.fAuthorsfollowed = (Authorsfollowed)=>{
      this.setState({Authorsfollowed})
    }

    this.state={
      Account: null,
      Teacher: null,
      Courses: null,
      Video: null,
      download: [],
      searchkey: '',
      yourCourses: [],
      Authorsfollowed: [],
      yourvideo: [],
      history: ['ReactJS',
      'ReactNative'],
      Theme: Theme[0],
      toggleAccount: this.toggleAccount,
      toggleTeacher: this.toggleTeacher,
      toggleCourses: this.toggleCourses,
      toggleVideo: this.toggleVideo,
      toggleAuthorsfollowed: this.toggleAuthorsfollowed,
      toggledownload: this.toggledownload,
      toggleyourCourses: this.toggleyourCourses,
      toggleyourvideo: this.toggleyourvideo,
      fdownload: this.fdownload,
      toggleHistory: this.toggleHistory,
      fHistory: this.fHistory,
      togglesearchkey: this.togglesearchkey,
      toggleTheme: this.toggleTheme,
      fyourvideo: this.fyourvideo,
      fyourCourses: this.fyourCourses,
      fAuthorsfollowed: this.fAuthorsfollowed
    }

  }

  render()
  {
    console.disableYellowBox = true;
    return(

      <Mycontext.Provider value={this.state}>
        <MenuProvider>
          <Screen></Screen>
          </MenuProvider> 
      </Mycontext.Provider>
    )
  }
}