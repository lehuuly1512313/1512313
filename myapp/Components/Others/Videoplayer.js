import React, {Component} from 'react'
import { Text, View , ScrollView ,Button, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import Share from './Share'

class Contents extends Component{
  render()
  {
    return(
      <View style={{
        height: 120,
        backgroundColor: 'gray',
        margin: 20,
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Text style={styles.txtitem2}>Contents</Text>
      </View>
    )
  }
}

class Transcripts extends Component{
  render()
  {
    return(
      <View style={{
        height: 100,
        backgroundColor: 'gray',
        marginTop: 20,
        marginLeft:  20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Text style={styles.txtitem2}>Transcripts</Text>
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
        transcripts: 'gray'
      }
    }
  
   render()
   {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    var liststar = [];
    for (let index = 0; index < 4; index++) {
      liststar.push(
        <Image style={{
          with: 15,
          height: 15
        }}source={require('../../img/star.png')}></Image>
      )
    }
    var date = new Date()
       return(
         <View style={styles.container}>
           <ScrollView>
          <Video source={{uri: "http://d3959tuydafzg6.cloudfront.net/1/travelogue2015.mp4"}}
                style={{
                  height: 300,

                }}
                rate={1.0}
                resizeMode='contain'
                muted={false}
                volume={1.0}
                repeat={false}
                playInBackground={false}
                playWhenInactive={false}
                onError={err => requestAnimationFrame(() => {
                  console.log(err);
                }
                ) }
              />
              <View style={styles.content}>
              <Text style={styles.txtitem}>React: The big picture</Text>
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
                 <Text style={styles.txtitem2}>Share</Text><Image source={{uri: 'https://purepng.com/public/uploads/large/share-icon-7nl.png'}} style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}></Image></View>
              </View>
              <View style={styles.teacher}>
               
                    <Image source={{uri: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg'}} style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10
                    }}></Image>
              <Text style={styles.txtitem2}>Le Huu Ly</Text>
               
              </View>
              <View style={styles.content}>
                <Text style={styles.txtitem2}>Beginer: {date.getDate() + '/' + date.getMonth()+ '/' + date.getFullYear()+ ' ' + date.getHours()+ ':' + date.getMinutes()}</Text>
                <View style={{marginLeft: 10, flexDirection: 'row'}}>{liststar}</View>
                <Text style={styles.txtitem2}>   (444)</Text>
              </View>
              <View style={styles.content}>
                <View style={{
                  alignItems: 'center',
                  flex: 1
                }}>
                <Image source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/book_bookmark.png'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                padding: 10
              }}></Image>
                  <Text style={styles.txtitem2}>BookMarked</Text>
                </View>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  
                }}>
                <Image source={{uri: 'https://www.vippng.com/png/detail/289-2892061_television-clipart-tv-channel-icon-channel-tv.png'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
               
              }}></Image>
                  <Text style={styles.txtitem2}>Add to channels</Text>
                </View>
                <View style={{
                  alignItems: 'center',
                  flex: 1
                }}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc4nTt2VJgWKBIRaxf7JRAlx-9qEhfz8eJOMQ8w2r2cG6lbKZS&usqp=CAU'}} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                
              }}></Image>
                  <Text style={styles.txtitem2}>Download</Text>
                </View>
              </View>
              <View >
                <TouchableHighlight style={styles.btn11}><Text style={styles.txtitem2}>Related paths and courses</Text></TouchableHighlight>
                <TouchableHighlight style={styles.btn11}><Text style={styles.txtitem2}>Take learning check</Text></TouchableHighlight>
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
                  <Text style={styles.txtitem2}>Contents</Text>
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
                  <Text style={styles.txtitem2}>Transcripts</Text>
                </View>
              </View>
              {this.state.contents === 'blue' ? (
                    <Contents></Contents>
                ): null}
                {this.state.transcripts === 'blue' ? (
                    <Transcripts></Transcripts>
                ): null}
                <Share ref={'share'}></Share>
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