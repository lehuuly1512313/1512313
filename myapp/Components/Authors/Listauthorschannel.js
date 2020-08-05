import React, {Component} from 'react'
import { Text, View ,StyleSheet, TouchableHighlight,TextInput, Image, FlatList, ScrollView, Dimensions } from 'react-native'
import {Mycontext} from '../../Context/Mycontext'

class NoContentDownload extends Component{
    render()
    {
      let screenwidth = Dimensions.get('window').width
      let screenheight = Dimensions.get('window').height
      return(
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: screenwidth,
        height: screenheight-74,
        backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
      }}>
        <Text style={
          {
            fontSize: 30,
            color: `${this.props.context.Theme.Color}`,
          }
        }>No content</Text>
      </View>
      )
    }
  }
  


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
           
            this.props.context.toggleTeacher(this.props.item)
            this.props.navigation.navigate(this.props.to)
          }}>
            <Image style={this.props.strech} source={{uri: this.props.item.Avatar}}></Image>
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
            }}>{this.props.item.Name}</Text>
              <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.Nofca} courses</Text>
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
                var arr = this.props.context.Authorsfollowed
                arr.splice(this.props.index, 1);
                this.props.context.fAuthorsfollowed(arr)
                this.props.item.channel = false
            }}>
                <Text style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold'
                }}>Unfollow</Text>
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

  export default class Listauthorschannel extends Component{
    render()
    {
       var val = this.context
       if(val.Authorsfollowed[0])
       {
        return(
            <View style={{
              width: '100%',
              height: '100%',
              backgroundColor: `${val.Theme.BackgroundColor}`,
              justifyContent: 'center'
            }}>
                 <FlatList 
                      data={val.Authorsfollowed}
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
                else
                {
                    return <NoContentDownload context={val}> </NoContentDownload>
                }
    }
  }

  Listauthorschannel.contextType = Mycontext

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