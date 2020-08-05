import React, {Component} from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import API from './../../API/Api'
const Api = new API()
import Notification from './../Notification/Notification'
import {Mycontext} from './../../Context/Mycontext'

const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class Downloadfile extends Component{

    constructor(props){
        super(props)
        this.state={
            notification: 'Đang tải xuống vui lòng đợi trong giây lát!...'
        }
      }

  componentWillMount()
  {
    var val = this.context
    var data = {
      url: val.UrlVideoDownload
    }
    Api.PostRequest(data,'http://192.168.1.3:4000/downloadyoutubevideo',null).then(res=>{
      if(res.data === 'done')
       {
           this.setState({notification: 'Video đã được tải xuống thành công!...'})
           Api.GetRequest('http://192.168.1.3:4000/createjs').then(res=>{
             if(res.data === 'done')
             {
              setTimeout(() => {
                this.props.navigation.goBack()
              }, 1000);

             }
           })
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
        justifyContent: 'center',
        backgroundColor: `${val.Theme.BackgroundColor}`,
      }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <View style={{marginRight: 5}}><Image source={img} style={styles.strech}></Image></View>
                    <View style={{marginLeft: 5}}>
                        <Text style={{
                              color: `${val.Theme.Color}`,
                              fontSize: 40,
                              fontWeight: 'bold'}}
                        >{val.Language.Downloadfile.DOWNLOADFILE}</Text></View>
                        <View>   
              </View>
                </View>
                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                        marginLeft: 20,
                        borderColor: 'white',
                        borderRadius: 20,
                        borderWidth: 4,
                        paddingTop: 20,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 20,
                        }}><Text style={styles.text1}>{this.state.notification}</Text>
                        <ActivityIndicator size={50} color="#0000ff" />
              </View>
  </View>
    )
  }
}

Downloadfile.contextType = Mycontext
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