import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList } from 'react-native';


const data = [
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach: 'Le Huu Ly',
    initdate: Date.now(),    
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),    
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),    
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),    
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),   
    numofless: 20,
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    teach:'Le Huu Ly',
    initdate: Date.now(),   
    numofless: 20,
  }
]

class Item extends Component{
  render()
  {
    return(
      <View style={{
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          
          <Image style={styles.strech} source={{uri: this.props.item.img}}></Image>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 120,
            paddingLeft: 10,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 18
            }}>{this.props.item.name}</Text>
           
             <Text style={styles.txtitem}>Teacher: {this.props.item.teach}</Text>
             <Text style={styles.txtitem}>Start date: {this.props.item.initdate}</Text>
             <Text style={styles.txtitem}>number of lessons: {this.props.item.numofless}</Text>
           
           
           
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
            <TouchableHighlight style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15
              }
            }>
                <Text style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold'
                }}>Join</Text>
            </TouchableHighlight>
            </View>
            <View style={{
              backgroundColor: '#1b2133',
              borderRadius: 5,
              marginTop: 2,
              borderWidth: 1,
              borderColor: 'white'
            }}>
            <TouchableHighlight style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15
              
              }
            }>
                <Text style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold'
                }}>Detail</Text>
            </TouchableHighlight>
            </View>
          </View>
         
        </View>
        <View style={{
          height: 1,
          backgroundColor: 'white'
        }}></View>
      </View>
    )
  }
}

export default class ListCourses extends Component{
  render()
  {
    return(
      <View style={styles.container}>
        <View style={{
          height: 40,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          
        }}>
          <Text style={{
            fontSize: 20,
            color: 'black',
            marginLeft: 10,
            fontWeight: 'bold',
            flex: 1,
          }}>List Courses</Text>
        </View>
        <FlatList 
          data={data}
          renderItem={({index, item})=>{
            return(
              <Item item={item} index={index}></Item>
            )
          }}
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
      justifyContent: 'center',
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
    fontSize: 16,
  }
});