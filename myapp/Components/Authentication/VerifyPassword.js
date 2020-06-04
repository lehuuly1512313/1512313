import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image } from 'react-native';
import {Accounts} from '../../Data/Account'
import Modal from 'react-native-modalbox'

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}


class Notification extends Component{


 

    showshare=()=>{
      this.refs.me.open()
    }
  
    render()
    {
      return(
        <Modal
        ref={'me'}
         style={{
          height: '45%',
          
          backgroundColor: 'white'
        }}
        position='center'
        backdrop={true}
        >
         <Text style={{
           margin: 20,
           color: 'darkcyan',
           fontSize: 20,
         }}>Notification</Text> 
          
            <View>
              <View style={styles.content}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}><Text style={styles.txtbtn4}>Please wait....{this.props.second}</Text></View>
              </View>
            </View>
        </Modal>
      )
    }
  }

export default class VerifyPassword extends Component{
    constructor(props){
        super(props)
        this.handlePressSignIn = this.handlePressSignIn.bind(this)
        this.handleConPassword = this.handleConPassword.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handlePress = this.handlePress.bind(this)
        var data = this.props.route.params.data
        
        this.state={
            Password: '',
            ConfirmPassword: '',
            data,
            status: 0
        }
      }

    
      handlePressSignIn = ()=>
      {
        this.props.navigation.navigate('Login');
      }

      handlePassword = (txt)=>{
          this.setState({Password: txt})
      }

      handleConPassword = (txt) =>{
          this.setState({ConfirmPassword: txt})
      }

      handlePress = ()=>{
          var {Password, ConfirmPassword, data} = this.state
          if(Password.length <= 6)
          {
              alert('mat khau phai tren 6 ky tu')
          }
          else if(Password !== ConfirmPassword)
          {
              alert('nhap lai mat khau khong chinh xac')
          }
          else
          {
              var Data = {
                Username: data.Email,
                Password: Password,
                Name: data.Name,
                Email: data.Email,
                Phone: data.Phone,
                Country: data.Country,
                Job: '',
                Company: '',
                Avatar: 'https://i.stack.imgur.com/l60Hf.png',
                Nofca: 0,
                Experience: 0,
                highest: 0,
                Bonus: 0,
              }
              Accounts.push(Data)
              this.refs.Notification.showshare()
              var _interval = setInterval(() => {
                var {status} = this.state
                status = status + 1
                this.setState({
                  status
                })
                if(status === 5)
                {
                  clearInterval(_interval)
                }
            }, 1000);
              setTimeout(() => {
                this.props.navigation.navigate('Login');
              }, 5000);
          }
      }

  render()
  {
    return(
      <View style={styles.container}>
                
                <View style={styles.flex}>
                    <Text style={styles.text1}>Password</Text>
                    <TextInput onChangeText={this.handlePassword} secureTextEntry={true}  style={styles.textin1} ></TextInput>
                    <Text style={styles.text1}>Confirm password</Text>
                    <TextInput onChangeText={this.handleConPassword} secureTextEntry={true} style={styles.textin1} ></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePress} style={styles.btn}>
                        <Text style={styles.txtbtn}>Done</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>Need help?</Text>
                </View>
                <Notification ref={'Notification'} second={this.state.status}></Notification>
            </View>
    )
  }
}

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
      fontSize: 18,
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
    fontSize: 40,
    fontWeight: 'bold'
  }
});