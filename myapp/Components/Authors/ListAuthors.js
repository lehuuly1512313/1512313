import React, {Component} from 'react'
import { Text, View ,StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import {Teachers} from '../../Data/Teacher'
import {Mycontext} from '../../Context/Mycontext'

import API from './../../API/Api'
import {DetailAuthorURL} from './../../API/Url'

const Api = new API()

class Itempath extends Component{
    render()
    {
      return(
        <View style={{
          flexDirection: 'column',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
          }} >
            <TouchableHighlight onPress={()=>{    
            Api.GetRequestWithParam(DetailAuthorURL,this.props.item.id).then(res=>{
              if(res)
              {
                this.props.context.toggleTeacher(res.data.payload)
                this.props.navigation.navigate('TeachProfile')
              }
            })
          }}>
              <Image style={this.props.strech} source={{uri: this.props.item['user.avatar']}}></Image>
            </TouchableHighlight>
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
            }}>{this.props.item['user.name']}</Text>
              <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.major}</Text>
              <View style={{
                flexDirection: 'row',
              }}>
              </View>
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
            
            </View>
            <View style={{
              backgroundColor: '#1b2133',
              borderRadius: 5,
              marginTop: 2,
              borderWidth: 2,
              borderColor: 'blue',
            }}>
            <TouchableHighlight style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30
              }
            } onPress={()=>{
              if(this.props.item.channel === false)
              {
                this.props.context.toggleAuthorsfollowed(this.props.item)
              }
            }}>
                <Text style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold'
                }}>Follow</Text>
            </TouchableHighlight>
            </View>
          </View>
  
          </View>
          <View style={{
            height: 1,
            backgroundColor: `${this.props.context.Theme.Color}`,
            marginLeft: 20,
            marginRight: 20
          }}></View>
        </View>
      )
    }
  }

  export default class ListAuthors extends Component{
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
                      data={val.Teachers}
                      renderItem={({index, item})=>{
                      return(
                      <Itempath item={item} context={val} index={index} strech={styles.strech3} navigation={this.props.navigation} to='TeachProfile'></Itempath>
                      )
                  }}
                  >
                  </FlatList>
                
            </View>
        )
    }
  }

  ListAuthors.contextType = Mycontext

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
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    txtitemforcus:{
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderColor: 'blue'
    },
    txtitem2:{
        color: 'white',
        fontSize: 16,
      }
  });