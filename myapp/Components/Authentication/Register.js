import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image } from 'react-native';

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}


export default class Register extends Component{
    constructor(props){
        super(props)
        this.handlePressSignIn = this.handlePressSignIn.bind(this)
      }
    
      handlePressSignIn = ()=>
      {
        this.props.navigation.navigate('Login');
      }
  render()
  {
    return(
      <View style={styles.container}>
                
                <View style={styles.flex}>
                    <Text style={styles.text1}>Email</Text>
                    <TextInput onChangeText={this.handleAccount} style={styles.textin1} ></TextInput>
                    <Text style={styles.text1}>Name</Text>
                    <TextInput onChangeText={this.handleAccount} style={styles.textin1} ></TextInput>
                    <Text style={styles.text1}>Phone </Text>
                    <TextInput onChangeText={this.handleAccount} style={styles.textin1} ></TextInput>
                    <Text style={styles.text1}>Country </Text>
                    <TextInput onChangeText={this.handleAccount} style={styles.textin1} ></TextInput>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePress} style={styles.btn}>
                        <Text style={styles.txtbtn}>SIGN UP</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.txtbtn3}>Need help?</Text>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSignIn} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>SIGN IN</Text>
                    </TouchableHighlight>
                </View>
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
});