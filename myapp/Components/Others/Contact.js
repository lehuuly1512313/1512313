import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class Contact extends Component{
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
                    }}>{val.Language.Contact.str}</Text>
                    
                </View>
      <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Contact.Email}</Text>
                    <TextInput onChangeText={this.handleAccount} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 50,
                      backgroundColor: `${val.Theme.InputColor}`
                    }} ></TextInput>
                </View>
                <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Contact.Contentyourfeedback}</Text>
                    <TextInput onChangeText={this.handleAccount} multiline={true} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 20,
                      backgroundColor: `${val.Theme.InputColor}`,
                      height: 150,
                      textAlignVertical: 'top'
                    }} ></TextInput>
                </View>
      <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePress} style={styles.btn}>
                        <Text style={styles.txtbtn}>{val.Language.Contact.SENDFEEDBACK}</Text>
                    </TouchableHighlight>
                </View>
                
  </View>
    )
  }
}

Contact.contextType = Mycontext

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