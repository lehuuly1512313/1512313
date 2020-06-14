import React, {Component} from 'react'
import { Text, View , ScrollView ,Button, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList } from 'react-native';

export default class Subscription extends Component{
  render()
  {
    var date = new Date()
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={
          {
            padding: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 4,
            marginRight: 20,
            marginLeft: 20,
            marginTop: 20
          }
        }>
            <Text style={styles.txtitem}>Subscription</Text>   
            
            
        </View> 
        <View style={
          {
            margin:20
          }
        }>
            <Text style={styles.txtitem2}>Subscription type:        individual</Text> 
            <Text style={styles.txtitem2}>Expirition date:           {date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()}</Text> 
        </View>
        <View style={styles.flex}>
                    <TouchableHighlight style={styles.btn2}>
                        <Text style={styles.txtbtn2}>Manage your subscription</Text>
                    </TouchableHighlight>
                </View>
        <View style={{
          justifyContent: 'center',
          alignItems:'center',
          marginTop: 40
        }}>
        <TouchableHighlight>
            <Text style={{
              color: 'white',
              fontSize: 20,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'white',
              padding: 10,
            }}>Get support</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Send Feedback</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Feature</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Authors</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Mobile and offline app</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Blog</Text>
        </TouchableHighlight>
        <TouchableHighlight >
            <Text style={styles.txtbtn3}>Contact</Text>
        </TouchableHighlight>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
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
    fontSize: 20,
  
  },
  txtbtn3:{
    color: 'white',
    fontSize: 20,
    marginTop: 20
  },
  txtitem:{
    color: 'white',
    fontSize: 25,
   
  },
  teacher:{
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: 'gray',
    flexDirection:'row',
    alignItems:'center',
    alignSelf: 'baseline',
    paddingRight: 20
  },
content:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
  },

  txtitem2:{
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 40,
  },
  btn11:{
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'dimgray',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center',
    alignItems:'center'
  }
});