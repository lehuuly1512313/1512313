import React, {Component} from 'react'
import { Text, AsyncStorage,  View, StyleSheet, TouchableHighlight,TextInput,Image,ActivityIndicator } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {changepasswordURL} from './../../API/Url'
import Notification from './../Notification/Notification'

const notification = 'Đang cập nhật lại mật khẩu vui lòng đợi trong giây lát!...'



const Api = new API()

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class ChangePassword extends Component{

    constructor(props){
        super(props)
        this.handlePassword = this.handlePassword.bind(this)
        this._storeData = this._storeData.bind(this)
        this.Change = this.Change.bind(this)
        this.state={
            password: '',
            confirmpassword: '',
        }
      }

      handlePassword=(txt)=>{
        this.setState({
            password: txt
          })
      }

      handleConfirmpassword=(txt)=>{
        this.setState({
            confirmpassword: txt
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

      Change = ()=>{
          var {confirmpassword, password} = this.state
          let val = this.context
          if(confirmpassword === '' && password === '')
          {
              alert('bạn chưa nhập đầy đủ thông tin')
          }
          else if(confirmpassword === password)
          {
              
              var Data = {
                id: val.Account.id,
                oldPass: val.Password,
                newPass: password
              }

              console.log(Data)
              const config = {
                headers: { Authorization: `Bearer ${val.Token}` }
            };
              Api.PostRequest(Data,changepasswordURL, config).then(res=>{
                if(res)
                {
                  val.togglePassword(password)
                  this.refs.Notification.showshare()
                  setTimeout(() => {
                    this.props.navigation.navigate('Sum')
                  }, 2000);
                }
                else
                {
                  this.refs.Notification.close()
                  alert('Đã xảy ra lỗi trong quá trình thay đổi mật khẩu xin thử lại!')
                }
              })
            
          }
          else
          {
              alert('mat khau nhap lai khong chinh xac')
          }
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
                    }}>{val.Language.ChangePassword.NewPassword} </Text>
                    <TextInput onChangeText={this.handlePassword} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} secureTextEntry={true}></TextInput>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.ChangePassword.ConfirmNewPassword}</Text>
                    <TextInput onChangeText={this.handleConfirmpassword} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.Change} style={styles.btn}>
                        <Text style={styles.txtbtn}>{val.Language.ChangePassword.Change}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>{val.Language.ChangePassword.Neehelp}</Text>
                </View>
                <Notification ref={'Notification'} notification={notification}></Notification>
            </View>
    )
  }
}

ChangePassword.contextType = Mycontext

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