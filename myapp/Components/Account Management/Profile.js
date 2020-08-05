import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"
import { Icon } from 'react-native-elements'
import {Mycontext} from './../../Context/Mycontext'

export default class Profile extends Component{
  render()
  {
    var val = this.context
    return(
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: `${val.Theme.BackgroundColor}`,
      }}>
            
          <View style={{
            justifyContent:'center',
           
          }}>
            <View style={{
              alignItems:'center',
              marginTop: 10
            }}>
            <Image style={styles.strech} source={{uri: `${val.Account.avatar}`}}></Image>
            </View>
        </View>
        <ScrollView style={{ alignSelf: 'stretch' }}>
            <DropDownItem
              key={1}
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
                  }}>{val.Language.Profile.YourInfomation}</Text>
                  <Icon name='keyboard-arrow-down' size={28} color={'black'}/>
                </View>
              }>
             
               <View >
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.YourID}: {val.Account.id}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Name}: {val.Account.name}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Email}: {val.Account.email}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Phone}: {val.Account.phone}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Type}: {val.Account.type}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Createdat}: {val.Account.createdAt}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Updatedat}: {val.Account.updatedAt}</Text>
                  
              </View>
              <TouchableHighlight style={styles.btn} onPress={()=>{
                this.props.navigation.navigate('ChangeInfo')
              }}>
                    <Text style={styles.txtitem2}>{val.Language.Profile.Edit}</Text>
              </TouchableHighlight>
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
                  }}>{val.Language.Profile.Courseshistory}</Text>
                    <Icon name='keyboard-arrow-down' size={28} color={'black'}/>              
                </View>
              }>
              <View style={{
               justifyContent:'center',
             }}>
               <View style={{
                 alignItems:'center',
                 flex: 1,
               }}>
               </View>
               <View style={{
                 flex: 2
               }}>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Numberofcoursesattended}: {val.Account.Nofca}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Experience}: {val.Account.Experience}</Text>
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.highestpoint}: {val.Account.highest}</Text> 
                  <Text style={{
                    color: `${val.Theme.Color}`,
                    fontSize: 18,
                    marginTop: 5
                  }}>{val.Language.Profile.Bonus}: {val.Account.Bonus}</Text> 
              </View>
             </View>
            </DropDownItem>
          </ScrollView>
      </View>
    )
  }
}

Profile.contextType = Mycontext

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
      alignItems: 'center',
      marginTop: 5,
      justifyContent: 'center',
      
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
      alignItems: 'center',
      
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
  },
  txtitem2:{
    color: 'white',
    fontSize: 18,
    
  }
});