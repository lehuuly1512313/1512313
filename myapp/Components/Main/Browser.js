import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'

import {Mycontext} from './../../Context/Mycontext'
import {Courses} from '../../Data/Courses'

import API from './../../API/Api'
import {DetailAuthorURL} from './../../API/Url'
import { color } from 'react-native-reanimated'

const Api = new API()

const data = ['Angular','JavaScript','C#','Java','ASP.NET','Node.js','Python','React']



export default class Browser extends Component{
  render()
  {
     
    var val = this.context
    let popskills = []
    for (let index = 0; index < data.length; index++) {
      popskills.push(
      <TouchableHighlight style={{
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 10
      }} onPress={()=>{
        this.props.showsearch()
        val.togglesearchkey(data[index])
      }}><Text style={styles.txtitem2}>{data[index]}</Text></TouchableHighlight>
      )
    }
    let paths = []
    for (let index = 0; index < val.news.length; index++) {
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
          }}>
            <Image source={{uri: val.news[index].imageUrl}} style={styles.strech3}></Image>
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
              <Text style={styles.txtitem2}>{val.news[index].title}</Text>
            </View>
          </View>
        </View>
      )
    }

    let path2s = []
    for (let index = 0; index < val.rates.length; index++) {
      path2s.push(
        <View style={{
            marginRight: 20,
        }}>
          <View style={{
            backgroundColor: 'dimgray',
            height: '50%',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={{uri: val.rates[index].imageUrl}} style={styles.strech3}></Image>
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
              <Text style={styles.txtitem2}>{val.rates[index].title} videos</Text>
            </View>
          </View>
        </View>
      )
    }
    let path3s = []
    for (let index = 0; index < val.recommendcourse.length; index++) {
      path3s.push(
        <View style={{
            marginRight: 20,
        }}>
          <View style={{
            backgroundColor: 'dimgray',
            height: '50%',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={{uri: val.recommendcourse[index].imageUrl}} style={styles.strech3}></Image>
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
              <Text style={styles.txtitem2}>{val.recommendcourse[index].title} videos</Text>
            </View>
          </View>
        </View>
      )
    }
    let topau = []
    var Teachers = val.Teachers
    for (let index = 0; index < Teachers.length; index++) {
     topau.push(
      <View style={{
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'

      }} >
      <TouchableHighlight onPress={()=>{
        Api.GetRequestWithParam(DetailAuthorURL,Teachers[index].id).then(res=>{
          if(res)
          {
            val.toggleTeacher(res.data.payload)
            this.props.navigation.navigate('TeachProfile')
          }
        })
        
      }}>
      <Image style={styles.strech2} source={{uri: Teachers[index]['user.avatar']}}></Image>
      </TouchableHighlight>
      <Text style={{
      color: `${val.Theme.Color}`,
      fontSize: 16,
    }}>{Teachers[index].Name}</Text>
    </View>
     )
    }
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height   
    return(
     
      <View style={{
        width: '100%',
        height: screenheight-124,
        backgroundColor: `${val.Theme.BackgroundColor}`,
      
      }}>
        <ScrollView>
        <Image style={{
          width: screenwidth - 40,
          height: 160,
          margin: 20,
        
        }} source={{uri: 'https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg'}}></Image>
         <Image style={{
          width: screenwidth - 40,
          height: 160,
          margin: 20,
          
        }} source={{uri: 'https://elearningindustry.com/wp-content/uploads/2017/03/how-to-improve-learning-transfer-and-retention.png'}}></Image>
        
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: `${val.Theme.Color}`,
          marginTop: 20,
          marginBottom: 20
        }}>Popular Skills</Text>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection: 'row',
            height: 40,
            marginLeft: 20,
          }} >{popskills}</View>
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
        }}>Recommend courses for you:</Text>
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
          this.props.navigation.navigate('ListCourses') 
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>see all</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            height: 160,
            marginLeft: 20,
          }}>{path3s}</View>
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
        }}>Top new courses</Text>
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
          this.props.navigation.navigate('ListCoursesNews') 
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>see all</Text>
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
        }}>Top rate courses</Text>
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
          this.props.navigation.navigate('ListCoursesRates') 
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>see all</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            height: 160,
            marginLeft: 20,
          }}>{path2s}</View>
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
        }}>Top authors</Text>
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
          this.props.navigation.navigate('ListAuthors') 
        }}>
          <Text style={{
            fontSize: 18,
            color: `${val.Theme.Color}`,
          }}>see all</Text>
          <Icon name='forward' size={30} color={`${val.Theme.Color}`}/>
          </View>
        </View>
         <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection:'row',
            marginLeft: 20,
            marginBottom: 10,
          }} >{topau}</View>
        </ScrollView>
        </ScrollView>
        
      </View>
      
    )
  }
}

Browser.contextType = Mycontext

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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  strech3:{
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