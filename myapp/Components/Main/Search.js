import React, {Component} from 'react'
import { Text, View ,StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions, Alert } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { Icon } from 'react-native-elements'
import {Courses} from './../../Data/Courses'
import {Teachers} from './../../Data/Teacher'
import {Videos} from './../../Data/Videos'
import {Mycontext} from './../../Context/Mycontext'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

  class ItemHistory extends Component{
    render()
    {
      return(
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }}>
        <TouchableHighlight style={{
          flex: 1
        }} onPress={
          ()=>{
            this.props.Search(this.props.item)
          }
        }>
       <Icon  name='call-made'
                size={25}
                color={'white'}
                ></Icon>
        </TouchableHighlight>
        <Text style={{
          color: 'white',
          fontSize: 20,
          flex: 2
        }}>{this.props.item}</Text>
        <TouchableHighlight style={{
          flex: 1
        }} onPress={()=>{
          var arr = this.props.context.history
          arr.splice(this.props.index, 1);
          this.props.context.fHistory(arr)
        }}>
          <Icon name='delete' size={25} color={'white'}/>
        </TouchableHighlight>
      </View>
      )
    }
  }

  class Itempath extends Component{
    render()
    {
      return(
        <View style={{
          flexDirection: 'column',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
          }} >
            <TouchableHighlight onPress={
            ()=>{
              this.props.context.toggleCourses(this.props.item)
              var Teacher = null
              for (let index = 0; index < Teachers.length; index++) {
                if(Teachers[index].id === this.props.item.Teacher)
                {
                  Teacher = Teachers[index]
                  break
                }
              }
              this.props.context.toggleTeacher(Teacher)
              this.props.navigation.navigate('CoureseDetail')
            }}
          >
            
            <Image style={this.props.strech} source={{uri: this.props.item.img}}></Image>
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
              <Text style={styles.txtitem2}>{this.props.item.Videos} Videos</Text>
              <View style={{
                flexDirection: 'row',
              }}>
              </View>
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

  class Itemauthor extends Component{
    render()
    {
      return(
        <View style={{
          flexDirection: 'column',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
          }} >
            <TouchableHighlight onPress={()=>{
            
            this.props.context.toggleTeacher(this.props.item)
            this.props.navigation.navigate(this.props.to)

          }}>
            
            <Image style={this.props.strech} source={{uri: this.props.item.Avatar}}></Image>
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
              }}>{this.props.item.Name}</Text>
              <Text style={styles.txtitem2}>{this.props.item.Nofca} courses</Text>
              <View style={{
                flexDirection: 'row',
              }}>
              </View>
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

  class Item extends Component{
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
          }} >
            <TouchableHighlight onPress={()=>{
            this.props.navigation.navigate(this.props.to)
          }}>
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
              <Text style={styles.txtitem2}>{this.props.item.description}</Text>
              <View style={{
                flexDirection: 'row',
              }}>
                <Text style={styles.txtitem2}>Ratting:  </Text>
                {liststar}
                <Text style={styles.txtitem2}>(200)</Text>
              </View>
            </View>
            <View style={{
            justifyContent: 'center',
            alignItems:'center',
            
          }}>
            <Menu>
                <MenuTrigger>
                    <Icon
                name='more-vert'
                size={40}
                color={'white'}
                />
                </MenuTrigger>
                <MenuOptions style={{
                   justifyContent: 'center',
                   alignItems: 'center',
                }}>
                    <MenuOption>
                    <Text style={{fontSize: 20}}>BookMarked</Text>
                    </MenuOption >
                   
                    <MenuOption onSelect={()=>{
                      this.props.context.toggleyourvideo(this.props.item)
                    }}>
                    <Text style={{fontSize: 20}}>Add to channels</Text>
                    </MenuOption>
                    
                    <MenuOption onSelect={()=>{
                      this.props.context.toggledownload(this.props.item)
                      
                    }}>
                    <Text style={{fontSize: 20}} >Download</Text>
                    </MenuOption> 
                </MenuOptions>
                </Menu>
            
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
  

class All extends Component{
    render()
    {
     
        var datacourse = []
        if(this.props.videos[0] !== undefined)
        {
          datacourse.push(this.props.videos[0])
          datacourse.push(this.props.videos[1])
        }
      
        var dataauthors = []
        if(this.props.teachers[0] !== undefined)
        {
          dataauthors.push(this.props.teachers[0])
          dataauthors.push(this.props.teachers[1])
        }

        var datapaths = []
        if(this.props.courses[0] !== undefined)
        {
          datapaths.push(this.props.courses[0])
        }
        
        return(
          
            <View style={styles.container}>
              <ScrollView>
              <View>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginLeft: 20,
                            marginTop: 10,
                            flex: 1
                        }
                    }>Videos</Text>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>{this.props.videos.length} Result ></Text>
                  </View>
                  <View style={{
                    height: 1,
                    backgroundColor: 'white',
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                  <FlatList 
                    data={datacourse} 
                    renderItem={({index, item})=>{
                    return(
                    <Item item={item} index={index} navigation={this.props.navigation} to='Videoplayer'></Item>
                    )
                }}
                >
                </FlatList>
                </View>
               <View>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginLeft: 20,
                            marginTop: 10,
                            flex: 1
                        }
                    }>Courses</Text>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>{this.props.courses.length} Result ></Text>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                <FlatList 
                    data={datapaths}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath item={item} index={index} strech={styles.strech} to='CoursesDetail' navigation={this.props.navigation}></Itempath>
                    )
                }}
                >
                </FlatList>
                </View>
                
              <View>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginLeft: 20,
                            marginTop: 10,
                            flex: 1
                        }
                    }>Authors</Text>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>{this.props.teachers.length} Result ></Text>
                </View>
                
              
            </View>
            <View style={{
                    height: 1,
                    backgroundColor: 'white',
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                  <FlatList 
                    data={dataauthors}
                    renderItem={({index, item})=>{
                    return(
                    <Itemauthor item={item} index={index} strech={styles.strech3} navigation={this.props.navigation} to='TeachProfile'></Itemauthor>
                    )
                }}
                >
                </FlatList>
                </ScrollView>
            </View>
            
        )
    }
}

class Coursess extends Component{
    render()
    {
        return(
            <View style={styles.container}>

                <Text style={{
                      fontSize: 18,
                      color: 'white',
                      marginLeft: 20,
                      marginTop: 20,
                    }}>Skill Levels ></Text>

                  <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10
                }}>
                    <Text style={{
                      fontSize: 18,
                      color: 'white',
                      marginLeft: 20,
                      flex: 1,
                    }}>{this.props.videos.length} Result</Text>
                    <Text style={{
                      fontSize: 18,
                      color: 'white',
                      marginRight: 20
                    }}>Newest</Text>
                </View>
                <FlatList 
                data={this.props.videos}
                renderItem={({index, item})=>{
                    return(
                    <Item context={this.props.context} item={item} index={index} navigation={this.props.navigation} to='Videoplayer'></Item>
                    )
                }}
                >
                </FlatList>
                
            </View>
        )
    }
}

class Paths extends Component{
  render()
  {
     
      return(
          <View style={styles.container}>
              <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10
              }}>
                  <Text style={{
                    fontSize: 20,
                    color: 'white',
                    marginLeft: 20
                  }}>{this.props.courses.length} Result</Text>
              </View>
               <FlatList 
                    data={this.props.courses}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath context={this.props.context} item={item} index={index} strech={styles.strech} navigation={this.props.navigation} to='CoureseDetail'></Itempath>
                    )
                }}
                >
                </FlatList>
              
          </View>
      )
  }
}

class Authors extends Component{
  render()
  {
     
      return(
          <View style={styles.container}>
            <View style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 10
            }}>
                <Text style={{
                  fontSize: 20,
                  color: 'white',
                  marginLeft: 20
                }}>{this.props.teachers.length} Result</Text>
            </View>
               <FlatList 
                    data={this.props.teachers}
                    renderItem={({index, item})=>{
                    return(
                    <Itemauthor context={this.props.context} item={item} index={index} strech={styles.strech3} navigation={this.props.navigation} to='TeachProfile'></Itemauthor>
                    )
                }}
                >
                </FlatList>
              
          </View>
      )
  }
}

class NonSearchKey extends Component{
  render()
  {
    let screenwidth = Dimensions.get('window').width
    let screenheight = Dimensions.get('window').height
    return(
    <View style={{
      width: screenwidth,
      height: screenheight-191,
      backgroundColor: '#1b2133',
    }}>
      
            
      <FlatList 
          data={this.props.context.history}
          renderItem={({index, item})=>{
          return(
            <ItemHistory Search={this.props.Search} context={this.props.context} item={item} index={index} strech={styles.strech3} navigation={this.props.navigation} to='TeachProfile'></ItemHistory>
              )
          }}
          >
          </FlatList>
              
    </View>
    )
  }
}

export default class Search extends Component{

  state = {
    search: '',
    index: 0,
    courses: [],
    videos: [],
    teachers: [],
    checkcourses: false,
    checkvideos: false,
    checkteachers: false
  };

  updateSearch = search => {
    this.setState({ search });
    var videos = []
    var courses = []
    var teachers = []
    var checkvideos = false
    var checkcourses = false
    var checkteachers = false
    Videos.map((val)=>{
      if(val.Tag.includes(search))
      {
        videos.push(val)
        checkvideos = true
      }
    })
    Courses.map((val)=>{
      if(val.name.includes(search))
      {
        courses.push(val)
        checkcourses = true
      }
    })
    Teachers.map((val)=>{
      if(val.Tag.includes(search))
      {
        teachers.push(val)
        checkteachers = true
      }
    })
   
    this.setState({
      videos,
      courses, 
      teachers,
      checkvideos,
      checkcourses,
      checkteachers
    })
  };


  onCancel=()=>{
    var val = this.context
    var {search} = this.state
    val.toggleHistory(search)
  }
    
    render()
    {
      var { search, videos, teachers, courses} = this.state;
      let rend = null
      let screenwidth = Dimensions.get('window').width
      let screenheight = Dimensions.get('window').height
      var {index} = this.state
      var val = this.context
      if(this.state.search==='')
      {
        rend = (
          <NonSearchKey context={val} Search={this.updateSearch}></NonSearchKey>
        )
      }
      else
      {
        rend = (
          <View>
            <View style={{
              height: 50,
              flexDirection: 'row'
          }}>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: 0 })
                this.setState({index: 0})
              }} style={index === 0 ? styles.txtitemforcus:styles.txtitem}><Text>ALL</Text></View>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: 480 })
                this.setState({index: 480})
              }} style={index === 480 ? styles.txtitemforcus:styles.txtitem}><Text>VIDEOS</Text></View>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: 960 })
                this.setState({index: 960})
              }} style={index === 960 ? styles.txtitemforcus:styles.txtitem}><Text>COURSES</Text></View>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: 1440 })
                this.setState({index: 1440})
              }} style={index === 1440 ? styles.txtitemforcus:styles.txtitem}><Text>AUTHORS</Text></View>
            </View>
            <ScrollView scrollEventThrottle={10}>
                <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                onMomentumScrollEnd={(e)=>{
                  this.setState({index: e.nativeEvent.contentOffset.x})
                }}
                ref={(node) => this.scroll = node}
                >
                    <View style={{
                        width: screenwidth,
                        height: screenheight-244,
                                
                    }}>
                       <All context={val} videos={videos} courses={courses} teachers={teachers} navigation={this.props.navigation}></All>
                    </View>
                    <View style={{
                        width: screenwidth,
                        height: screenheight-244,
                    }}>
                       <Coursess context={val} videos={videos} navigation={this.props.navigation}></Coursess>
                    </View>

                    <View style={{
                        width: screenwidth,
                        height: screenheight-244,
                    }}>
                       <Paths context={val} courses={courses} navigation={this.props.navigation}></Paths>
                    </View>

                    <View style={{
                        width: screenwidth,
                        height: screenheight-244,
                    }}>
                       <Authors context={val} teachers={teachers} navigation={this.props.navigation}></Authors>
                    </View>
                    </ScrollView>
                    
            </ScrollView>
          </View>
        )
      }
        return(
            <View>
               
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        onClear={this.onCancel}
                        value={search}
                        round={true}
                        lightTheme={true}
                      />
                {rend}
            </View>
        )
    }
}

Search.contextType = Mycontext

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
      width: 120,
      height: 120,
      borderRadius: 60,
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
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    txtitemforcus:{
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderColor: 'blue'
    },
    txtitem2:{
        color: 'white',
        fontSize: 16,
      }
  });