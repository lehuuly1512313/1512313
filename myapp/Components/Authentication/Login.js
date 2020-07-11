import React, {Component} from 'react'
import { Text, AsyncStorage,  View, StyleSheet, TouchableHighlight,TextInput,Image, ActivityIndicator } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {LoginURL} from './../../API/Url'
import Notification from './../Notification/Notification'
import {getprocesscoursesURL,getfavoritecoursesURL,recommendcourseURL} from './../../API/Url'

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
            username: '',
            password: '',
            notification: 'Đang xác thực thông tin!...'
        }
      }
    
      handlePressSSO = ()=>
      {
        this.props.navigation.navigate('Sum');
      }

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
                    }}>Email or Username </Text>
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
                    }}>Password </Text>
                    <TextInput onChangeText={this.handlePassword} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.Login} style={styles.btn}>
                        <Text style={styles.txtbtn}>SIGN IN</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>Need help?</Text>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handleforgetpassword} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>Forget Password</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSSO} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>Use single sign-on (sso)</Text>
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