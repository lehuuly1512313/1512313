import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'

const data = [
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 3
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 4
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 4.5
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 3.5
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 2
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 2.5
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 2.5
  },
  {
    name: 'react js',
    img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
    description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
    ratting: 2.5
  }
]

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
      height: screenheight-191,
      backgroundColor: '#1b2133',
    }}>
      <Text style={
        {
          fontSize: 30,
          color: 'white',
        }
      }>No content</Text>
    </View>
    )
  }
}

class Item extends Component{

  constructor(props){
    super(props)
    this.handlePressSSO = this.handlePressSSO.bind(this)
    this.handelvideoplayer = this.handelvideoplayer.bind(this)
  }

  handlePressSSO = ()=>
  {
    this.props.navigation.navigate('CoureseDetail');
  }

  handelvideoplayer = ()=>{
    this.props.navigation.navigate('Videoplayer');
  }

  render()
  {
    var liststar = [];
    let count = 0
    for (let index = 0; index < this.props.item.ratting - 0.5; index++) {
      count++;
      liststar.push(
        <Image style={{
          with: 15,
          height: 15
        }}source={require('../../img/star.png')}></Image>
      )
    }
    
    if(this.props.item.ratting > count)
    {
      liststar.push(<Image style={{
        with: 15,
        height: 15
      }}source={require('../../img/haftstar.png')}></Image>)
    }
    return(
      <View style={{
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
        }}>
          <TouchableHighlight onPress={this.handelvideoplayer}>
          <Image style={styles.strech} source={{uri: this.props.item.img}}></Image>
          </TouchableHighlight>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 120,
            paddingLeft: 10,
            justifyContent: 'center'
          }}>
            <Text style={{
              color: 'white',
              fontSize: 18
            }}>{this.props.item.name}</Text>
            <Text onPress={this.handlePressSSO} style={styles.txtitem}>{this.props.item.description}</Text>
            <View style={{
              flexDirection: 'row',
              
            }}>
              <Text style={styles.txtitem}>Ratting:  </Text>
              {liststar}
            </View>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems:'center',
            
          }}>
            <TouchableHighlight>
              <Icon name='delete' size={40} color={'white'}/>
            </TouchableHighlight>
            
          </View>
         
        </View>
        <View style={{
          height: 1,
          backgroundColor: 'white',
          marginLeft: 20,
          marginRight: 20
        }}></View>
      </View>
    )
  }
}




export default class Download extends Component{
  
  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    return(
      <View style={{
        width: '100%',
        height: screenheight-124,
        backgroundColor: '#1b2133',
        justifyContent: 'center',
      }}>
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
          }}></Text>
          <View style={{
            marginRight: 10,
            justifyContent:'flex-end'
          }} onStartShouldSetResponder={this.handlePressSSO}>
          <Text style={{
            fontSize: 20,
            color: '#0000ff',
            marginLeft: 10,
          }}>Remove all</Text>
          </View>
          
         
        </View>
        <FlatList 
          data={data}
          renderItem={({index, item})=>{
            return(
                <Item item={item} index={index} navigation={this.props.navigation}></Item>
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