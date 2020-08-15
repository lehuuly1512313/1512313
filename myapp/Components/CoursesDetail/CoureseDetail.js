import React, {Component} from 'react'
import { Text, View, StyleSheet, Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"
import {Mycontext} from './../../Context/Mycontext'

class Item extends Component{
  render()
  {
    return(
     
      <View >
        <View style={{
          
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10,
        }}>
          
          <Image style={styles.strech} source={{uri: this.props.item.imageUrl}}></Image>
          
          <View style={{
           
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
            justifyContent: 'center',
            alignItems:'center',
            
          }}>
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


export default class CoursesDetail extends Component{
  render()
  {
    var liststar = [];
    let count = 0
    var val = this.context
    console.log(val.coursesLikeCategory)
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
                  }}>{val.Language.CoureseDetail.Coureses}</Text>
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
                  }}>{val.Language.CoureseDetail.Title}: {val.Courses.title}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Subtitle}: {val.Courses.subtitle}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Description}: {val.Courses.description}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.learnWhat}: {val.Courses.learnWhat}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Price}: {val.Courses.price}</Text>
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
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'white',
                    flex: 1,
                  }}>{val.Language.CoureseDetail.Author}</Text>
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
                  }}>{val.Language.CoureseDetail.Name}: {val.Teacher.name}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Email}: {val.Teacher.email}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Phone}: {val.Teacher.phone}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Id}: {val.Teacher.id}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Major}: {val.Teacher.major}</Text>
                  
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Intro}: {val.Teacher.intro}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Skills}: {val.Teacher.skills}</Text>

                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Createdat}: {val.Teacher.createdAt}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Updatedat}: {val.Teacher.updatedAt}</Text> 
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.CoureseDetail.Ratting}: </Text>
                    <View style={{
                      marginTop: 10,
                      flexDirection: 'row'
                    }}>{liststar}</View>
                  </View>
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
                  marginBottom: 5,
                  marginTop: 5,
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'white',
                    flex: 1,
                  }}>{val.Language.CoureseDetail.coursesLikeCategory}</Text>
                  <Image style={styles.strech2} source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_227668.png'}}></Image>
                </View>
              }>
             <View style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: `${val.Theme.BackgroundColor}`,
                  justifyContent: 'center'
                }}>
       
                <FlatList 
                  data={val.coursesLikeCategory}
                  nestedScrollEnabled={true}
                  renderItem={({index, item})=>{
                    return(
                      <Item item={item} context={val} index={index}></Item>
                    ) 
                  }}
                  >
                </FlatList>
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