import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'

export default class Home extends Component{

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    return(
      <View style={{
        width: '100%',
        height: screenheight-124,
        backgroundColor: '#1b2133',
        justifyContent: 'center',
      }}></View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
      marginBottom: 50
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
      width: 120,
      height: 120,
     
  },
  strech2:{
    width: 40,
    height: 40,
  },
  strech3:{
    width: 120,
    height: 120,
    borderRadius: 60,
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
  txtitem:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 20
  },
  txtitem2:{
      color: 'white',
      fontSize: 16,
    }
});