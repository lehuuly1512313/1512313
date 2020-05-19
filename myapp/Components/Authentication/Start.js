import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,Image } from 'react-native';

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class Start extends Component{

  constructor(props){
    super(props)
    this.handlePressSignIn = this.handlePressSignIn.bind(this)
    this.handlePressSignUp = this.handlePressSignUp.bind(this)
  }

  handlePressSignIn = ()=>
  {
    this.props.navigation.navigate('Login');
  }

  handlePressSignUp=()=>
  {
    this.props.navigation.navigate('Register');
  }

  render()
  {
    return(
      <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <View style={{marginRight: 5}}><Image source={img} style={styles.strech}></Image></View>
                    <View style={{marginLeft: 5}}><Text style={styles.txtbtn4}>PLURALSIGHT</Text></View>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSignIn} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>SIGN IN</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSignUp} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>SIGN UP</Text>
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
      justifyContent: 'center',
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
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});