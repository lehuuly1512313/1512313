
import React, {Component} from 'react'
import { Text,  View, StyleSheet, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modalbox'

export default class Notification extends Component{

    showshare=()=>{
      this.refs.me.open()
    }

    close=()=>{
      this.refs.me.close()
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
                        alignItems: 'center',
                        marginRight: 10,
                        marginLeft: 20
                        }}><Text style={styles.txtbtn4}>{this.props.notification}</Text>
                         <ActivityIndicator size={50} color="#0000ff" />
                        </View>
              </View>
            </View>
        </Modal>
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