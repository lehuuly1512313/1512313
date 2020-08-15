import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {courseinfoURL,getcoursedetailURL, DetailAuthorURL, detailwithlessonURL,lastwatchedlessonURL} from './../../API/Url'
const Api = new API()

export default class Home extends Component{  

  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    var val =  this.context
    let paths = []
    if(val.processcourses.length > 0)
    {
    for (let index = 0; index < val.processcourses.length; index++) {
      paths.push(
        <View style={{
            marginRight: 20,
        }}>
          <View style={{
             backgroundColor: 'dimgray',
             height: '50%',
             width: 200,
             justifyContent: 'center',
             alignItems: 'center',
          }} onStartShouldSetResponder={()=>{
            const config = {
              headers: { Authorization: `Bearer ${val.Token}` }
          };
            Api.GetRequestWithTwoParam(getcoursedetailURL, val.processcourses[index].id, null).then(res=>{
              if(res)
              {
                val.toggleRattinglist(res.data.payload.ratings.ratingList)
              }
            })
            Api.GetRequestWithParameHeader(detailwithlessonURL, val.processcourses[index].id,config).then(res=>{
              if(res)
              {
                val.toggleVideo(res.data.payload)
                console.log(val.processcourses[index].id)
                Api.GetRequestWithParameHeader(lastwatchedlessonURL, val.processcourses[index].id,config).then(res=>{
                  if(res)
                  {
                    val.toggleVideoHistory(res.data.payload)         
                  }
                })
                Api.GetRequestWithParam(DetailAuthorURL, val.processcourses[index]['instructorId']).then(res=>{
                  if(res)
                  {
                    val.toggleTeacher(res.data.payload)             
                    this.props.navigation.navigate('Videoplayer');
                  }
                })
                
              }
            }) 
          }}>
            <Image source={{uri: val.processcourses[index].courseImage}} style={styles.strech4}></Image>
          </View>
          <View style={{
            backgroundColor: 'gray',
            height: '50%',
            width: 200
          }}>
            <View style={{
              marginLeft: 10,
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 18,
                color: 'white'
              }}>{val.processcourses[index].courseTitle}</Text>
            </View>
          </View>
        </View>
      )
    }
  }
  else
  {
    paths.push(<View style={
      {
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 20,
        width: screenwidth - 40,
        justifyContent: "center",
        alignItems: 'center'
      }
    }><Text style={{
      color: `${val.Theme.Color}`,
      fontSize: 30
    }}>{val.Language.Home.Nocontent}</Text></View>)
  }
  
    let authors = []
    if(val.Authorsfollowed.length > 0)
    {
    for (let index = 0; index < val.Authorsfollowed.length; index++) {
      authors.push(
        <View style={{
            marginRight: 20,
        }}>
          <View style={{
            backgroundColor: 'dimgray',
            height: '50%',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={{uri: val.Authorsfollowed[index].Avatar}} style={styles.strech3}></Image>
          </View>
          <View style={{
            backgroundColor: 'gray',
            height: '50%',
            width: 200
          }}>
            <View style={{
              marginLeft: 10,
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 18,
                color: 'white'
              }}>{val.Authorsfollowed[index].Name}</Text>
              <Text style={styles.txtitem2}>{val.Authorsfollowed[index].Nofca} courses</Text>
            </View>
          </View>
        </View>
      )
      }
    }
    else{
      authors.push(<View style={
        {
          borderColor: 'gray',
          borderWidth: 1,
          marginRight: 20,
          width: screenwidth - 40,
          justifyContent: "center",
          alignItems: 'center'
        }
      }><Text style={{
        color:`${val.Theme.Color}`,
        fontSize: 30
      }}>{val.Language.Home.Nocontent}</Text></View>)
    }

    let courses = []

    if(val.favoritecourses.length > 0)
    {
    for (let index = 0; index < val.favoritecourses.length; index++) {
      courses.push(
        <View style={{
            marginRight: 20,
        }}>
          <View style={{
            backgroundColor: 'dimgray',
            height: '50%',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center'
          }} onStartShouldSetResponder={()=>{
            const config = {
              headers: { Authorization: `Bearer ${val.Token}` }
          };

            Api.GetRequestWithParameHeader(detailwithlessonURL, val.favoritecourses[index].id,config).then(res=>{
              if(res)
              {
                val.toggleVideo(res.data.payload)
                Api.GetRequestWithParam(DetailAuthorURL, val.favoritecourses[index]['instructorId']).then(res=>{
                  if(res)
                  {
                    val.toggleTeacher(res.data.payload)             
                    this.props.navigation.navigate('Videoplayer');
                  }
                })
                
              }
            }) 
          }}>
            <Image source={{uri: val.favoritecourses[index].courseImage}} style={styles.strech4}></Image>
          </View>
          <View style={{
            backgroundColor: 'gray',
            height: '50%',
            width: 200
          }}>
            <View style={{
              marginLeft: 10,
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 18,
                color: 'white'
              }}>{val.favoritecourses[index].courseTitle}</Text>
            </View>
          </View>
        </View>
      )
    }
  }
  else
  {
    courses.push(<View style={
      {
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 20,
        width: screenwidth - 40,
        justifyContent: "center",
        alignItems: 'center'
      }
    }><Text style={{
      color: `${val.Theme.Color}`,
      fontSize: 30
    }}>{val.Language.Home.Nocontent}</Text></View>)
  }
    return(
      <View style={{
        width: '100%',
        height: screenheight-124,
        backgroundColor: `${val.Theme.BackgroundColor}`,
      }}>
        <ScrollView>
        <View style={{
          flexDirection: 'row'
        }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: `${val.Theme.Color}`,
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>{val.Language.Home.Yourcourses}</Text>
        <View style={{
          marginRight: 20,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'gray',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          
        }} onStartShouldSetResponder={()=>{
          val.toggleHomes(val.processcourses)
          this.props.navigation.navigate('Listcourseschannel')
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>{val.Language.Home.seeall}</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            height: 160,
            marginLeft: 20,
          }}>{paths}</View>
        </ScrollView>
        <View style={{
          flexDirection: 'row'
        }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: `${val.Theme.Color}`,
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>{val.Language.Home.Yourfavoritecourses}</Text>
        <View style={{
          marginRight: 20,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'gray',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          
        }} onStartShouldSetResponder={()=>{
          val.toggleHomes(val.favoritecourses)
          this.props.navigation.navigate('Listcoursesfavorite')
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>{val.Language.Home.seeall}</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            height: 160,
            marginLeft: 20,
          }}>{courses}</View>
        </ScrollView>
        <View style={{
          flexDirection: 'row'
        }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: `${val.Theme.Color}`,
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>{val.Language.Home.AuthorsFollowed}</Text>
        <View style={{
          marginRight: 20,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'gray',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          
        }} onStartShouldSetResponder={()=>{
          this.props.navigation.navigate('Listauthorschannel')
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>{val.Language.Home.seeall}</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            height: 160,
            marginLeft: 20,
          }}>{authors}</View>
        </ScrollView>
        </ScrollView> 
      </View>
    )
  }
}

Home.contextType = Mycontext

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
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  strech4:{
    width: 200,
    height: '100%',
   
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