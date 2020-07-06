import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"
import {Mycontext} from './../../Context/Mycontext'




export default class CoursesDetail extends Component{
  render()
  {
    var liststar = [];
    let count = 0
    var val = this.context
    console.log(val.Courses)
    for (let index = 0; index < 4 - 0.5; index++) {
      count++;
      liststar.push(
        <Image style={{
          with: 15,
          height: 15
        }}source={require('../../img/star.png')}></Image>
      )
    }
    return(
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: `${val.Theme.BackgroundColor}`,
      }}>
       
        <ScrollView style={{ alignSelf: 'stretch' }}>
            <DropDownItem
              key={1}
              style={styles.dropDownItem}
              contentVisible={false}
              header={
                <View style={{
                  flexDirection:'row',
                  backgroundColor:'gray',
                  borderRadius: 5,
                  padding:10,
                  marginBottom: 5,
                  marginTop: 5,
                  
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'white',
                    flex: 1,
                  }}>Coureses</Text>
                  <Image style={styles.strech2} source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_227668.png'}}></Image>
                </View>
              }>
             <View style={{
               justifyContent:'center',
             }}>
               <View style={{
                 alignItems:'center',
                 flex: 1,
               }}>
                <Image style={styles.strech} source={{uri: val.Courses.imageUrl}}></Image>
               </View>
               <View style={{
                 flex: 2
               }}>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Title: {val.Courses.title}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Subtitle: {val.Courses.subtitle}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Description: {val.Courses.description}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>learn What: {val.Courses.learnWhat}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Price: {val.Courses.price}</Text>
              </View>
             </View>
            </DropDownItem>
            <DropDownItem
              key={1}
              style={styles.dropDownItem}
              contentVisible={false}
              
              header={
                <View style={{
                    flexDirection:'row',
                    backgroundColor:'gray',
                    borderRadius: 5,
                    padding:10,
                    marginTop: 5
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'white',
                    flex: 1,
                  }}>Author</Text>
                    <Image style={styles.strech2} source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_227668.png'}}></Image>              
                </View>
              }>
              <View style={{
               justifyContent:'center',
             }}>
               <View style={{
                 alignItems:'center',
                 flex: 1,
               }}>
                <Image style={styles.strech} source={{uri: val.Teacher.avatar}}></Image>
               </View>
               <View style={{
                 flex: 2
               }}>
                                    <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Name: {val.Teacher.name}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Email: {val.Teacher.email}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Phone: {val.Teacher.phone}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Id: {val.Teacher.id}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Major: {val.Teacher.major}</Text>
                  
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Intro: {val.Teacher.intro}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Skills: {val.Teacher.skills}</Text>

                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Created At: {val.Teacher.createdAt}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Updated At: {val.Teacher.updatedAt}</Text> 
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>Ratting: </Text>
                    <View style={{
                      marginTop: 10,
                      flexDirection: 'row'
                    }}>{liststar}</View>
                  </View>
              </View>
             </View>
            </DropDownItem>
          </ScrollView>
      </View>
    )
  }
}
CoursesDetail.contextType = Mycontext

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
      borderRadius: 60
  },
  strech2:{
    width: 24,
    height: 15,
    justifyContent: 'flex-end',
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
    fontSize: 18,
    marginTop: 5
  }
});