import React, {Component} from 'react'
import { Text, AsyncStorage,  View, StyleSheet, TouchableHighlight,TextInput,Image } from 'react-native';
import {Accounts} from '../../Data/Account'
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {UpdateProfileURL} from './../../API/Url'


const Api = new API()

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class ChangeInfo extends Component{

    constructor(props){
        super(props)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleAvatar = this.handleAvatar.bind(this)
        this.handleName = this.handleName.bind(this)
        this.state={
            Name: '',
            Phone: '',
            Country: '',
            Job: '',
            Company: ''
        }
      }

      componentWillMount()
      {
        var val = this.context
        this.setState({
          Name: val.Account.name,
          Phone: val.Account.phone,
          Avatar: val.Account.avatar
        })
      }
    
      handleName = (Name)=>{
          this.setState({Name})
      }

      handlePhone = (Phone)=>{
        this.setState({Phone})
    }

    handleAvatar = (Avatar)=>{
        this.setState({Avatar})
    }

   

    Changeinfo = ()=>{
      var val = this.context
      var {Name,
        Phone,
        Country,
        Job,
        Company} = this.state
        val.Account.Name = Name
        val.Account.Phone = Phone
        val.Account.Country = Country
        val.Account.Job = Job
        val.Account.Company = Company
        val.toggleAccount(val.Account)
        alert('thay doi thong tin thanh cong')
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
                    }}>Name</Text>
                    <TextInput onChangeText={this.handleName} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} value={this.state.Name}></TextInput>
                   <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }} >Phone</Text>
                    <TextInput onChangeText={this.handlePhone} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} value={this.state.Phone}></TextInput>
                     <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }} >Avatar</Text>
                    <TextInput onChangeText={this.handleAvatar} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} value={this.state.Avatar}></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.Changeinfo} style={styles.btn}>
                        <Text style={styles.txtbtn}>Change</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>Need help?</Text>
                </View>
            </View>
    )
  }
}

ChangeInfo.contextType = Mycontext

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
});