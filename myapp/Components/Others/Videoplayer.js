import React, {Component} from 'react'
import { Text, View , ScrollView ,Button, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList, TouchableOpacityBase } from 'react-native';
import Video from 'react-native-video';
import Share from './Share'
import {Mycontext} from './../../Context/Mycontext'
import { Icon } from 'react-native-elements'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ReactNativeYouTube from './ReactNativeYouTube';
import ReactNativeVideo from './ReactNativeVideo'


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
          <TouchableHighlight onPress={()=>{
            this.props.setStateVideoURL(this.props.item.videoUrl)
            this.props.setStatelessonId(this.props.item.id)
          }}>
          <Image style={styles.strech} source={{uri: this.props.imageUrl}}></Image>
          </TouchableHighlight>
          
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
            }}>{this.props.item.name} </Text>
            <View style={{
            flexDirection: 'row',
          }}>
             <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.context.Language.Videoplayer.Time}: {this.props.item.hours} ({this.props.context.Language.Videoplayer.hours}) </Text>
             <Text style={{
              color: `${this.props.context.Theme.Color}`,
              fontSize: 18
            }}>{this.props.context.Language.Videoplayer.Order}: {this.props.item.numberOrder} </Text>
            </View>
           
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

class ListVideo extends Component{
  render()
  {
    return(
      <View style={{
        backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
      }}>
        <Text style={{
              marginLeft: 10,
              marginRight: 20,
              marginTop: 10,
              marginBottom: 10,
              color: `${this.props.context.Theme.Color}`,
              fontSize: 24
            }}>{this.props.item.name} </Text>
        <FlatList 
          data={this.props.item.lesson}
          renderItem={({index, item})=>{
            return(
              <Item setStatelessonId={this.props.setStatelessonId} setStateVideoURL={this.props.setStateVideoURL} item={item} context={this.props.context} imageUrl={this.props.imageUrl} index={index}></Item>
            ) 
          }}
          >
        </FlatList>
        
      </View>
    )
  }
}


class Contents extends Component{
  render()
  {
    
    return(
      <View style={{
        height: 400,
        borderColor: `${this.props.context.Theme.Color}`,
        borderWidth: 1,
        marginTop: 20,
        marginLeft:  20,
        marginRight: 20,
      }}>
        
         <FlatList 
         nestedScrollEnabled={true}
          data={this.props.context.Video.section}
          renderItem={({index, item})=>{
            return(
              <ListVideo setStatelessonId={this.props.setStatelessonId} setStateVideoURL={this.props.setStateVideoURL} item={item} imageUrl={this.props.imageUrl} context={this.props.context} index={index}></ListVideo>
            ) 
          }}
          >
        </FlatList>
      </View>
    )
  }
}

class Transcripts extends Component{
  render()
  {
    return(
      <View style={{
        height: 400,
        borderColor: `${this.props.context.Theme.Color}`,
        borderWidth: 1,
        marginTop: 20,
        marginLeft:  20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Menu>
                <MenuTrigger>
                   <View style={{
                      borderRadius: 12,
                      borderColor: 'gray',
                      borderWidth: 2,
                      padding: 5,
                      flexDirection: 'row',
                      justifyContent:'center',
                      alignItems:'center',
                      marginLeft: 20,
                      width: 200
                   }}>
                     <Text style={{
                       fontSize: 24,
                       color: `${this.props.context.Theme.Color}`,
                       flex: 1
                     }}>{this.props.context.Theme.Name}</Text>
                     <Icon name='keyboard-arrow-down' size={28} color={`${this.props.context.Theme.Color}`}/>
                   </View>
                </MenuTrigger>
                <MenuOptions style={{
                   justifyContent: 'center',
                   alignItems: 'center',
                }}>
                    <MenuOption>
                    <Text style={{fontSize: 20}}>English</Text>
                    </MenuOption>
                    
                    <MenuOption>
                    <Text style={{fontSize: 20}} >Vietnamese</Text>
                    </MenuOption> 
                </MenuOptions>
                </Menu>
      </View>
    )
  }
}

export default class Videoplayer extends Component{

    constructor(props)
    {
      super(props)
      this.state={
        contents: 'blue',
        transcripts: 'gray',
        videourl: '',
        lessonId: '',
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: false,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        playerWidth: Dimensions.get('window').width,
      }
      this.setStateVideoURL = this.setStateVideoURL.bind(this)
    }

    setStateVideoURL = (videourl)=>{
      this.setState({videourl})
    }

    setStatelessonId = (lessonId)=>{
      this.setState({lessonId})
    }

    
   render()
   {
    var val = this.context
    var liststar = [];
    for (let index = 0; index < 4; index++) {
      liststar.push(
        <Image style={{
          with: 15,
          height: 15
        }}source={require('../../img/star.png')}></Image>
      )
    }
    var video = null
    
    if(this.state.videourl && this.state.videourl.includes('https://youtube.com/embed/'))
    {
      var slit = this.state.videourl.split('/')
      video = (<ReactNativeYouTube ref={'youtube'} lessonId={this.state.lessonId} id={slit[slit.length-1]}></ReactNativeYouTube>
      )
    }
    else 
    {
      video = (<ReactNativeVideo url={val.Video.promoVidUrl}></ReactNativeVideo>)
    }
  

    var date = new Date()
       return(
         <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: `${val.Theme.BackgroundColor}`,
         }}>
           
           {video}
           <ScrollView>
              
              
              <View style={styles.content}>
              <Text style={{
                 color: `${val.Theme.Color}`,
                 fontSize: 25,
                 flex: 1
              }}>{val.Video.title}</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'darkcyan',
                paddingLeft: 10,
                borderRadius: 20
              }} onStartShouldSetResponder={()=>{
                this.refs.share.showshare()
              }}>
                 <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Share}</Text><Image source={{uri: 'https://purepng.com/public/uploads/large/share-icon-7nl.png'}} style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}></Image></View>
              </View>
              <View style={styles.teacher} onStartShouldSetResponder={()=>{
                
                this.props.navigation.navigate('TeachProfile')
              }}>
                    <Image source={{uri: `${val.Teacher.avatar}`}} style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10
                    }}></Image>
              <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
              }}>{val.Teacher.name}</Text>
               
              </View>
              <View style={{
                borderWidth: 3,
                borderRadius: 10,
                borderColor: `${val.Theme.Color}`,
                marginRight: 20,
                marginLeft: 20,
                paddingBottom: 20,
                marginTop: 20
              }}>
              <View style={styles.content}><Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 25,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Ratting}</Text></View>
              <View style={styles.content}><Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.formalityPoint}: {val.Video.formalityPoint} ({val.Language.Videoplayer.Point})</Text></View>
              <View style={styles.content}><Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.contentPoint}:  {val.Video.contentPoint} ({val.Language.Videoplayer.Point})</Text></View>
              <View style={styles.content}> 
              <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.presentationPoint}:  {val.Video.presentationPoint} ({val.Language.Videoplayer.Point})</Text></View>
                </View>
              <View style={styles.content}>
                <View style={{
                  alignItems: 'center',
                  flex: 1
                }} onStartShouldSetResponder={()=>{
                  this.props.navigation.navigate('Rating')
                }}>
                <Image source={{uri: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                padding: 10
              }}></Image>
                  <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.BookMarked}</Text>
                </View>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  
                }}>
                  <TouchableHighlight onPress={()=>{
                     if(val.Video.channel === false)
                     {
                       val.toggleyourvideo(val.Video)
                     }
                  }}>
                <Image source={{uri: 'https://www.vippng.com/png/detail/289-2892061_television-clipart-tv-channel-icon-channel-tv.png'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
               
              }}></Image></TouchableHighlight>
                  <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Addtofavorite}</Text>
                </View>
                <View style={{
                  alignItems: 'center',
                  flex: 1
                }}>
                  <TouchableHighlight onPress={()=>{
                    val.toggleUrlVideoDownload(this.state.videourl)
                    this.props.navigation.navigate('Downloadfile');
                  }}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc4nTt2VJgWKBIRaxf7JRAlx-9qEhfz8eJOMQ8w2r2cG6lbKZS&usqp=CAU'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                
              }}></Image></TouchableHighlight>
                  <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Download}</Text>
                </View>
              </View>
              <View >
                <TouchableHighlight style={styles.btn11}><Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Relatedpathsandcourses}</Text></TouchableHighlight>
                <TouchableHighlight style={styles.btn11}><Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Takelearningcheck}</Text></TouchableHighlight>
              </View>
              <View style={styles.content}>
                <View style={
                  {
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth: 4,
                    borderBottomColor: `${this.state.contents}`,
                    padding: 10
                  }
                } onStartShouldSetResponder={()=>this.setState({
                  contents: 'blue',
                  transcripts: 'gray'
                })}>
                  <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Contents}</Text>
                </View>
                <View style={
                  {
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth: 4,
                    borderBottomColor: `${this.state.transcripts}`,
                    padding: 10

                  }
                } onStartShouldSetResponder={()=>this.setState({
                  contents: 'gray',
                  transcripts: 'blue'
                })}>
                  <Text style={{
                  color: `${val.Theme.Color}`,
                  fontSize: 18,
                  fontWeight:'bold'
                }}>{val.Language.Videoplayer.Transcripts}</Text>
                </View>
              </View>
             
              {this.state.contents === 'blue' ? (
                <View>
                    <Contents setStateVideoURL={this.setStateVideoURL} setStatelessonId={this.setStatelessonId} context={val} imageUrl={val.Video.imageUrl}></Contents>
                </View>
                ): null}
                {this.state.transcripts === 'blue' ? (
                  <View>
                    <Transcripts context={val}></Transcripts>
                  </View>
                ): null}
              
               
              </ScrollView>
              <Share ref={'share'}></Share>
            </View>
       )
   }
}

Videoplayer.contextType = Mycontext

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
    fontSize: 25,
    flex: 1
  },
  teacher:{
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: 'gray',
    flexDirection:'row',
    alignItems:'center',
    alignSelf: 'baseline',
    paddingRight: 20
  },
content:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
  },

  txtitem2:{
    color: 'white',
    fontSize: 18,
    fontWeight:'bold'
  },
  btn11:{
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'dimgray',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center',
    alignItems:'center'
  }
});