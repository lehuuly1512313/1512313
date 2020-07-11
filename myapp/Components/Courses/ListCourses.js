import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import { Icon } from 'react-native-elements'

import API from './../../API/Api'
import {courseinfoURL, DetailAuthorURL, getfreecoursesURL} from './../../API/Url'


const Api = new API()

class Item extends Component{


  render()
  {
    return(
      <View style={{
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
            marginBottom: 10,
        }}>
          
          <Image style={styles.strech} source={{uri: this.props.item.imageUrl}}></Image>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 120,
            paddingLeft: 10,
            justifyContent: 'center'
          }}>
            
             <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.title} </Text>
           
           
           
          </View>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <View style={{
              backgroundColor: 'gray',
              borderRadius: 5,
              marginBottom: 2
            }}>
            <TouchableHighlight style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15
              }
            } onPress={()=>{
              var data = {
                courseId: this.props.item.id
                
              }

              const config = {
                headers: { Authorization: `Bearer ${this.props.context.Token}` }
            };
              Api.PostRequest(data, getfreecoursesURL, config).then(res=>{
                if(res)
                {
                  console.log(res.data)
                }
              })
            }}>
                <Icon name='exit-to-app' size={22} color={`${this.props.context.Theme.Color}`}/>
            </TouchableHighlight>
            </View>
            <View style={{
              backgroundColor: '#1b2133',
              borderRadius: 5,
              marginTop: 2,
              borderWidth: 1,
              borderColor: 'white'
            }}>
            <TouchableHighlight style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15
              
              }
            } onPress={()=>{

              Api.GetRequestWithParam(courseinfoURL, this.props.item.id).then(res=>{
                if(res)
                {
                  this.props.context.toggleCourses(res.data.payload)
                  Api.GetRequestWithParam(DetailAuthorURL, this.props.item['instructorId']).then(res=>{
                    if(res)
                    {
                      this.props.context.toggleTeacher(res.data.payload)              
                      this.props.navigation.navigate('CoureseDetail')
                    }
                  })
                }
              })
            }}>
                <Icon name='search' size={22} color={`${this.props.context.Theme.Color}`}/>
            </TouchableHighlight>
            </View>
          </View>
         
        </View>
        <View style={{
          height: 1,
          backgroundColor: `${this.props.context.Theme.Color}`,
          marginLeft: 20,
          marginRight: 20,
        
        }}></View>
      </View>
    )
  }
}

export default class ListCourses extends Component{
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
       
        <FlatList 
          data={val.recommendcourse}
          renderItem={({index, item})=>{
            return(
              <Item item={item} context={val} navigation={this.props.navigation} index={index}></Item>
            ) 
          }}
          >
        </FlatList>
        
      </View>
    )
  }
}


ListCourses.contextType = Mycontext

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
    fontSize: 20
  },
  txtbtn3:{
    color: '#008ad3',
    fontSize: 20,
    
  },
  txtitem:{
    color: 'white',
    fontSize: 16,
  }
});