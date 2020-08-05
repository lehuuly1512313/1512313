import React, {Component} from 'react'
import { Text, AsyncStorage,  View, StyleSheet, TouchableHighlight,TextInput,Image, ActivityIndicator } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {LoginURL} from './../../API/Url'
import Notification from './../Notification/Notification'
import {getprocesscoursesURL,getfavoritecoursesURL,recommendcourseURL} from './../../API/Url'
import { GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
const Api = new API()

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}
 
export default class Login extends Component{

    constructor(props){
        super(props)
        this.handlePressSSO = this.handlePressSSO.bind(this)
        this.handleforgetpassword = this.handleforgetpassword.bind(this)
        this.handleAccount = this.handleAccount.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this._storeData = this._storeData.bind(this)
        this.Login = this.Login.bind(this)
        
        this.state={
            username: 'lehuuly1512313@gmail.com',
            password: '123456789',
            notification: 'Đang xác thực thông tin!...',
            userInfo: null,
            error: null,
            gettingLoginStatus: true,
        }
      }
    
      handlePressSSO = ()=>
      {
        this.props.navigation.navigate('Sum');
      }

    componentDidMount() {
        //initial configuration
        GoogleSignin.configure({
          //It is mandatory to call this method before attempting to call signIn()
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          // Repleace with your webClientId generated from Firebase console
          webClientId: '216421450333-prkfafg3u1goc34uuqisdksivincj7q8.apps.googleusercontent.com',// my clientID
          offlineAccess: false
        });
        //Check if user is already signed in
        this._isSignedIn();
      }

      _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
          alert('User is already signed in');
          //Get the User details as user is already signed in
          this._getCurrentUserInfo();
        } else {
          //alert("Please Login");
          console.log('Please Login');
        }
        this.setState({ gettingLoginStatus: false });
      };

      _getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          console.log('User Info --> ', userInfo);
          this.setState({ userInfo: userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            alert('User has not signed in yet');
            console.log('User has not signed in yet');
          } else {
            alert("Something went wrong. Unable to get user's info");
            console.log("Something went wrong. Unable to get user's info");
          }
        }
      };

      _signOut = async () => {
        //Remove user session from the device.
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ userInfo: null }); // Remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };

      _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
          await GoogleSignin.hasPlayServices({
            //Check if device has Google Play Services installed.
            //Always resolves to true on iOS.
            showPlayServicesUpdateDialog: true,
          });
          const userInfo = await GoogleSignin.signIn();
          console.log('User Info --> ', userInfo);
          this.setState({ userInfo: userInfo });
        } catch (error) {
          console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log('Some Other Error Happened');
          }
        }
      };

      handleforgetpassword=()=>
      {
        this.props.navigation.navigate('ForgetPass');
      }

      handleAccount=(txt)=>{
          this.setState({
            username: txt
          })
      }

      handlePassword=(txt)=>{
        this.setState({
            password: txt
          })
      }

      _storeData = async (key, data) => {
        try {
          await AsyncStorage.setItem(
            key,
            data
          );
        } catch (error) {
        }
      };

      Login = ()=>{
          var {username, password} = this.state
          let val = this.context
          var check = false
          if(username === '' || password === '')
          {
            alert('Tài khoản hoặc mật khẩu không được để trống')
          }
         
          var Data = {
            email: username,
            password,
          }
          this.refs.Notification.showshare()
          Api.PostRequest(Data,LoginURL,null).then(res=>{
            if(res)
            {
              this.setState({notification: 'đang đăng nhập vui lòng đợi trong giây lát!...'})
              val.toggleAccount(res.data.userInfo)
              val.togglePassword(password)
              val.toggleToken(res.data.token)
              setTimeout(() => {
                this.props.navigation.navigate('Sum')
              }, 1500);
              const config = {
                headers: { Authorization: `Bearer ${res.data.token}` }
            };
                Api.GetRequestWithParameHeader(getprocesscoursesURL,'', config).then(res=>{
                  if(res)
                  {
                  val.toggleprocesscourses(res.data.payload)
                  }
                })

                Api.GetRequestWithParameHeader(getfavoritecoursesURL,'', config).then(res=>{
                  if(res)
                  {
                  val.togglefavoritecourses(res.data.payload)
                  }
                })

                Api.GetRequestWithThreeParam(recommendcourseURL,res.data.userInfo.id,10,1).then(res=>{
                  if(res)
                  {
                    val.togglerecommendcourse(res.data.payload)
                  }
                })
            }
            else
            {
              this.refs.Notification.close()
              alert('Email không tồn tại hoặc chưa được kích hoạt')
            }
      
          })
          
      }


  render()
  {
    var val = this.context
    return(
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: `${val.Theme.BackgroundColor}`,
        justifyContent: 'center'
      }}>
                <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Login.EmailorUsername} </Text>
                    <TextInput onChangeText={this.handleAccount} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} ></TextInput>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Login.Password} </Text>
                    <TextInput onChangeText={this.handlePassword} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.Login} style={styles.btn}>
                        <Text style={styles.txtbtn}>{val.Language.Login.SIGNIN}</Text>
                    </TouchableHighlight>
                </View>
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Auto}
                  onPress={this._signIn.bind(this)}
                   />

                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>{val.Language.Login.Needhelp}</Text>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handleforgetpassword} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>{val.Language.Login.ForgetPassword}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSSO} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>{val.Language.Login.Usesinglesignonsso}</Text>
                    </TouchableHighlight>
                </View>
                <Notification ref={'Notification'} notification={this.state.notification}></Notification>
            </View>
    )
  }
}

Login.contextType = Mycontext

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
      justifyContent: 'center'
  },
  flex:{
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
  },
  flex2:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  text1:{
      fontSize: 20,
      marginBottom: 10,
      color: 'white'
  },
  textin1:{
      padding: 10,
      fontSize: 20,
      borderRadius: 50,
      backgroundColor: '#d3d3d3'
  },
  strech:{
      width: 80,
      height: 80,
  },
  btn:{
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#415e9e',
      backgroundColor: '#3b5998',
      alignItems: 'center'
  },
  txtbtn:{
      color: 'white',
      fontSize: 20
  },
  btn2:{
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      borderWidth: 3,
      borderRadius: 50,
      borderColor: 'blue',
      backgroundColor: '#1b2133',
      alignItems: 'center'
      
  },
  txtbtn2:{
    color: 'white',
    fontSize: 20
  },
  txtbtn3:{
    color: '#008ad3',
    fontSize: 20,
    
  },
  txtbtn4:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  }
});