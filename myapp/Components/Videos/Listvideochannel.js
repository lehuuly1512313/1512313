import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import {Videos} from './../../Data/Videos'
import {Mycontext} from './../../Context/Mycontext'

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
      height: screenheight-74,
      backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
    }}>
      <Text style={
        {
          fontSize: 30,
          color: `${this.props.context.Theme.Color}`,
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
    this.props.context.toggleVideo(this.props.item)
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
          <Image style={styles.strech} key={this.props.item.key} source={{uri: this.props.item.img}}></Image>
          </TouchableHighlight>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 120,
            paddingLeft: 10,
            justifyContent: 'center'
          }}>
            <Text onPress={this.handlePressSSO} style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.name}</Text>
            <View style={{
              flexDirection: 'row',
              
            }}>
              <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 16
            }}>Ratting:  </Text>
              {liststar}
            </View>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems:'center',
            
          }}>
            <TouchableHighlight onPress={()=>{
              var arr = this.props.context.yourvideo
              arr.splice(this.props.index, 1);
              this.props.context.fyourvideo(arr)
              this.props.item.channel = false
            }}>
              <Icon name='clear' size={40} color={`${this.props.context.Theme.Color}`}/>
            </TouchableHighlight>
            
          </View>
         
        </View>
        <View style={{
          height: 1,
          backgroundColor: `${this.props.context.Theme.Color}`,
          marginLeft: 20,
          marginRight: 20
        }}></View>
      </View>
    )
  }
}




export default class Listvideochannel extends Component{
  
  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    var val = this.context
    if(val.download[0])
    {
      return(
        <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: `${val.Theme.BackgroundColor}`,
          justifyContent: 'center',
        }}>
     
          <FlatList 
            data={val.download}
            renderItem={({index, item})=>{
              return(
                  <Item context={val} item={item} index={index} navigation={this.props.navigation}></Item>
              )
            }}
            >
          </FlatList>
        </View>
        )
    }
    else
    {
      return <NoContentDownload context={val}></NoContentDownload>
    }
    
  }
}

Listvideochannel.contextType = Mycontext

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