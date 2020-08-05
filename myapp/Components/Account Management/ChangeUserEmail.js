import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {changeuseremailURL} from './../../API/Url'
import Notification from './../Notification/Notification'



const Api = new API()


const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class ChangeUserEmail extends Component{

  constructor(props){
    super(props)
    this.handleEmail = this.handleEmail.bind(this)
    this.Send = this.Send.bind(this)
    this.state={
        Email: '',
        notification: 'Đang tiến hành gửi mail!...'
    }
  }

  handleEmail=(Email)=>{
    this.setState({
        Email
      })
  }



  Send = ()=>{
          var {Email} = this.state
          var data = {
            newEmail: Email
          }
          var val = this.context
          const config = {
            headers: { Authorization: `Bearer ${val.Token}` }
         };

          this.refs.Notification.showshare()
          Api.PutRequest(data,changeuseremailURL, config).then(res=>{
            if(res)
            {
              this.setState({notification: 'Email đã được gửi xin kiểm tra và làm theo hướng dẫn'})
              setTimeout(() => {
                this.props.navigation.navigate('Login')
              }, 2000);
            }
            else
            {
              this.refs.Notification.close()
              alert('Đã xảy ra lỗi trong quá trình gửi email xin vui lòng thử lại')
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
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <View style={{marginRight: 5}}><Image source={img} style={styles.strech}></Image></View>
          <View style={{marginLeft: 5}}><Text style={{
                              color: `${val.Theme.Color}`,
                              fontSize: 40,
                              fontWeight: 'bold'}}>PLURALSIGHT</Text></View>
      </View>
      <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.ChangeUserEmail.str}</Text>
                    
                </View>
      <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.ChangeUserEmail.Email}</Text>
                    <TextInput onChangeText={this.handleEmail} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} ></TextInput>
                </View>
      <View style={styles.flex}>
                    <TouchableHighlight onPress={this.Send} style={styles.btn}>
                        <Text style={styles.txtbtn}>{val.Language.ChangeUserEmail.SENDEMAIL}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePress} style={styles.btn2}>
                        <Text style={styles.txtbtn}>{val.Language.ChangeUserEmail.CANCEL}</Text>
                    </TouchableHighlight>
                    
                </View>
                <Notification ref={'Notification'} notification={this.state.notification}></Notification>
  </View>
    )
  }
}

ChangeUserEmail.contextType = Mycontext

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
      justifyContent: 'center',
  },
  flex:{
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
  },
  flex2:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  text1:{
      fontSize: 25,
      marginBottom: 20,
      color: 'white'
  },
  textin1:{
      padding: 10,
      fontSize: 20,
      borderRadius: 50,
      backgroundColor: '#d3d3d3'
  },
  strech:{
      width: 100,
      height: 100,
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
      borderRadius: 50,
      backgroundColor: 'gray',
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
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});