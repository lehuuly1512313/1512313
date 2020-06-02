import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import {Teachers} from './../../Data/Teacher'
import {Mycontext} from './../../Context/Mycontext'




const data = ['Angular','JavaScript','C#','Java','ASP.NET','Node.js','Python','React']
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

const data2 = [
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
  {
    name: 'Le Huu Ly',
    img: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
    courses: 12
  },
]

export default class Browser extends Component{
  render()
  {
    let popskills = []
    for (let index = 0; index < data.length; index++) {
      popskills.push(
      <View style={{
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 10
      }}><Text style={styles.txtitem2}>{data[index]}</Text></View>
      )
    }
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

    let topau = []
    var val = this.context
    for (let index = 0; index < Teachers.length; index++) {
     topau.push(
      <View style={{
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'

      }} >
      <TouchableHighlight onPress={()=>{
        val.toggleTeacher(Teachers[index])
        this.props.navigation.navigate('TeachProfile')
      }}>
      <Image style={styles.strech2} source={{uri: Teachers[index].Avatar}}></Image>
      </TouchableHighlight>
      <Text style={styles.txtitem2}>{Teachers[index].Name}</Text>
    </View>
     )
    }
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    let listimg = []
    for (let index = 0; index < 10; index++) {
      listimg.push(
        <View>
        <Image style={{
          width: screenwidth-160,
          height: 80,
          marginBottom: 5,
          marginRight: 10
        }} source={require('../../img/bac.jpg')}></Image>
         <Image style={{
          width: screenwidth-160,
          height: 80,
          marginTop: 5
        }} source={require('../../img/bac.jpg')}></Image>
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
        <Image style={{
          width: screenwidth - 40,
          height: 160,
          margin: 20,
        
        }} source={{uri: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/SUC/color1-20191204062437970.jpg'}}></Image>
         <Image style={{
          width: screenwidth - 40,
          height: 160,
          margin: 20,
          
        }} source={{uri: 'https://cdn.ragan.com/wp-content/uploads/2019/07/color_marketing_psychology.jpg'}}></Image>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection: 'row',
            height: 160,
            marginLeft: 20,
          }}>{listimg}</View>
        </ScrollView>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          color: 'white',
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
          color: 'white',
          marginTop: 20,
          marginBottom: 20,
          flex: 1
        }}>Paths</Text>
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
          
        }}>
          <Text style={{
            fontSize: 18,
            color: 'white',
          }}>see all</Text>
          <Icon name='forward' size={30} color={'white'}/>
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
          color: 'white',
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
          
        }}>
          <Text style={{
            fontSize: 18,
            color: 'white',
          }}>see all</Text>
          <Icon name='forward' size={30} color={'white'}/>
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