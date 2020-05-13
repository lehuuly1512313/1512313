import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"

export default class Profile extends Component{
  render()
  {
    return(
      <View style={styles.container}>
            <View style={{
              height: 40,
              backgroundColor: 'white',
              flexDirection: 'row',          
            }}>
              <Text style={{
                fontSize: 20,
                color: 'black',
                marginLeft: 10,
                fontWeight: 'bold',
                flex: 1,
              }}>Profile</Text>
            </View>
          <View style={{
            justifyContent:'center',
           
          }}>
            <View style={{
              alignItems:'center',
              marginTop: 10
            }}>
            <Image style={styles.strech} source={{uri: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png'}}></Image>
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
                  }}>Your Infomation</Text>
                  <Image style={styles.strech2} source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_227668.png'}}></Image>
                </View>
              }>
             
               <View >
                  <Text style={styles.txtitem}>Name: Le Huu Ly</Text>
                  <Text style={styles.txtitem}>Email: lehuuly1512313@gmail.com</Text>
                  <Text style={styles.txtitem}>Phone: 0338314081</Text>
                  <Text style={styles.txtitem}>Country: Viet Nam</Text>
                  <Text style={styles.txtitem}>Job: Student</Text>
                  <Text style={styles.txtitem}>Company: HMCMUS</Text>
                  
              </View>
              <TouchableHighlight style={styles.btn}>
                    <Text style={styles.txtitem2}>Edit</Text>
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
                  }}>Course history</Text>
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
               </View>
               <View style={{
                 flex: 2
               }}>
                  <Text style={styles.txtitem}>Number of courses attended: 10</Text>
                  <Text style={styles.txtitem}>Experience (years): 1</Text>
                  <Text style={styles.txtitem}>highest point: 100</Text> 
                  <Text style={styles.txtitem}>Bonus (times): 3</Text> 
              </View>
             </View>
            </DropDownItem>
          </ScrollView>
      </View>
    )
  }
}

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