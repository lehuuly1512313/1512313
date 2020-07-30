import React, {Component} from 'react'
import Screen from './Components/MainScreen/Screen'
import {Mycontext} from './Context/Mycontext'
import { MenuProvider } from 'react-native-popup-menu';
import {Theme} from './Data/Theme'
import API from './API/Api'
import {ListAuthorsURL, topnewURL,toprateURL,categoryallURL} from './API/Url'
import ReactNativeVideo from './Components/Others/ReactNativeVideo'
import PlayVideoDownload from './Components/Others/PlayVideoDownload'


const Api = new API()

export default class App extends Component{

  constructor(props){
    super(props)

    Api.GetRequest(categoryallURL).then(res=>{
      if(res)
      {
      this.setState({categoryall: res.data.payload})
      }
    })


    Api.GetRequest(ListAuthorsURL).then(res=>{
      if(res)
      {
      this.setState({Teachers: res.data.payload})
      }
    })
    var data = {
      limit: 10,
      page: 1
    }
    Api.PostRequest(data,topnewURL, null).then(res=>{
      if(res)
      {
      this.setState({news: res.data.payload})
      }
    })

    Api.PostRequest(data,toprateURL, null).then(res=>{
      if(res)
      {
      this.setState({rates: res.data.payload})
      }
    })

    
    this.toggleAccount = (Account) => {
      this.setState({
        Account
      })
    }  

    this.togglePassword = (Password) => {
      this.setState({
        Password
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

    this.toggleToken = (Token)=>{
      this.setState({Token})
    }

    this.toggleprocesscourses=(processcourses)=>{
      this.setState({processcourses})
    }

    this.togglefavoritecourses=(favoritecourses)=>{
      this.setState({favoritecourses})
    }

    this.togglerecommendcourse=(recommendcourse)=>{
      this.setState({recommendcourse})
    }

    this.toggleHomes = (Homes)=>
    {
      this.setState({Homes}) 
    }

    this.toggleUrlVideoDownload = (UrlVideoDownload)=>{
      this.setState({UrlVideoDownload})
    }

    this.state={
      Teachers: [],
      Account: null,
      Teacher: null,
      Courses: null,
      Video: null,
      UrlVideoDownload: null,
      Password: '',
      download: [],
      searchkey: '',
      yourCourses: [],
      Authorsfollowed: [],
      yourvideo: [],
      history: ['ReactJS',
      'ReactNative'],
      Theme: Theme[0],
      Token: '',
      news: '',
      rates: '',
      processcourses: [],
      favoritecourses: [],
      recommendcourse: [],
      Homes: [],
      categoryall: [],
      toggleAccount: this.toggleAccount,
      toggleHomes: this.toggleHomes,
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
      fAuthorsfollowed: this.fAuthorsfollowed,
      togglePassword:this.togglePassword,
      toggleToken: this.toggleToken,
      toggleprocesscourses: this.toggleprocesscourses,
      togglefavoritecourses: this.togglefavoritecourses,
      togglerecommendcourse: this.togglerecommendcourse,
      toggleUrlVideoDownload:this.toggleUrlVideoDownload
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