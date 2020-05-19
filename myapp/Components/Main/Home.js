import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'

const data1 = [
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
  {
    name: 'Paths',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    courses: 12
  },
]

export default class Home extends Component{

  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    let paths = []
    for (let index = 0; index < data1.length; index++) {
      paths.push(
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
            <Image source={{uri: data1[index].img}} style={styles.strech3}></Image>
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
              }}>{data1[index].name}</Text>
              <Text style={styles.txtitem2}>{data1[index].courses} courses</Text>
            </View>
          </View>
        </View>
      )
    }

    return(
      <View style={{
        width: '100%',
        height: screenheight-124,
        backgroundColor: '#1b2133',
      }}>
        <ScrollView>
        <View style={{
          flexDirection: 'row'
        }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: 'white',
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>Continue learning</Text>
        <Text style={{
          marginRight: 20,
          fontSize: 18,
          color: 'white',
          marginTop: 20,
          marginBottom: 20
        }}>see all ></Text>
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
          color: 'white',
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>Paths</Text>
        <Text style={{
          marginRight: 20,
          fontSize: 18,
          color: 'white',
          marginTop: 20,
          marginBottom: 20
        }}>see all ></Text>
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
          color: 'white',
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>Channels</Text>
        <Text style={{
          marginRight: 20,
          fontSize: 18,
          color: 'white',
          marginTop: 20,
          marginBottom: 20
        }}>see all ></Text>
        </View>
        <View style={{
            backgroundColor: 'dimgray',
            marginLeft: 20,
            marginRight: 20,
            
            height: 200,
          }}>
            <Icon name='home' size={55}></Icon>
            <Text style={{
              color:'white',
              fontSize: 16,
              marginTop: 60,
              marginLeft: 20,
              marginRight: 20
            }}>Chung toi la nhung con bo vui nhon, chung toi la nhung con bo vui</Text>
          </View>
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
    width: 60,
    height: 60,
    borderRadius: 30,
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