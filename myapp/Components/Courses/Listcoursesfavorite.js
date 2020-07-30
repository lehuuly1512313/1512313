import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions,TextInput,Image, FlatList } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import { Icon } from 'react-native-elements'
import API from './../../API/Api'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {courseinfoURL, DetailAuthorURL, getfreecoursesURL,likecourseURL} from './../../API/Url'

const Api = new API()

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
  render()
  {
    return(
      <View style={{
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
            marginBottom: 10,
        }}>
          
          <Image style={styles.strech} source={{uri: this.props.item.courseImage}}></Image>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 120,
            paddingLeft: 10,
            justifyContent: 'center'
          }}>
            <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.courseTitle}</Text>
           
             <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.item.total} lessons</Text>
           
           
           
          </View>

          {/* <View style={{
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
            } onPress={()=>{
            var arr = this.props.context.yourCourses
              arr.splice(this.props.index, 1);
              this.props.context.fyourCourses(arr)
              this.props.item.channel = false
            }}>
                <Icon name='clear' size={22} color={`${this.props.context.Theme.Color}`}/>
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
            } onPress={()=>{
              Api.GetRequestWithParam(courseinfoURL, this.props.item.id).then(res=>{
                if(res)
                {
                  this.props.context.toggleCourses(res.data.payload)
                  Api.GetRequestWithParam(DetailAuthorURL, this.props.item['instructorId']).then(res=>{
                    if(res)
                    {
                      this.props.context.toggleTeacher(res.data.payload)              
                      this.props.navigation.navigate('CoureseDetail')
                    }
                  })
                }
              })
            }}>
                <Icon name='search' size={22} color={`${this.props.context.Theme.Color}`}/>
            </TouchableHighlight>
            </View>
          </View> */}

          <View style={{
            justifyContent: 'center',
            alignItems:'center',
            
          }}>
            <Menu>
                <MenuTrigger>
                    <Icon
                name='more-vert'
                size={40}
                color={`${this.props.context.Theme.Color}`}
                />
                </MenuTrigger>
                <MenuOptions style={{
                   justifyContent: 'center',
                   alignItems: 'center',
                }}>

                   
                <MenuOption onSelect={()=>{
                      const config = {
                        headers: { Authorization: `Bearer ${this.props.context.Token}` }
                    };
                    var data = {
                      courseId: this.props.item.id
                      
                    }
                      Api.PostRequest(data, getfreecoursesURL, config).then(res=>{
                        if(res)
                        {
                          alert('Bạn đã đăng ký khóa học này thành công')
                        }
                        else
                        {
                          alert('Bạn đã đăng ký khóa học này rồi hoặc đây không phải là một khóa học miễn phí')
                        }
                      })
                    }}>
                    <Text style={{fontSize: 20}}>Erol me</Text>
                    </MenuOption >
                
                    <MenuOption onSelect={()=>{
                       Api.GetRequestWithParam(courseinfoURL, this.props.item.id).then(res=>{
                        if(res)
                        {
                          this.props.context.toggleCourses(res.data.payload)
                          Api.GetRequestWithParam(DetailAuthorURL, this.props.item['instructorId']).then(res=>{
                            if(res)
                            {
                              this.props.context.toggleTeacher(res.data.payload)              
                              this.props.navigation.navigate('CoureseDetail')
                            }
                          })
                        }
                      })
                    }}>
                    <Text style={{fontSize: 20}} >Detail</Text>
                    </MenuOption> 
                </MenuOptions>
                </Menu>
            
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

export default class Listcoursesfavorite extends Component{
  render()
  {
    var val = this.context
    if(val.Homes[0])
    {
    return(
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: `${val.Theme.BackgroundColor}`,
        justifyContent: 'center'
      }}>
       
        <FlatList 
          data={val.Homes}
          renderItem={({index, item})=>{
            return(
              <Item item={item} context={val} navigation={this.props.navigation} index={index}></Item>
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


Listcoursesfavorite.contextType = Mycontext

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