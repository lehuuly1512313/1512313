import React, {Component} from 'react'
import { Text, View ,StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions, Alert } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { Icon } from 'react-native-elements'
import {Teachers} from './../../Data/Teacher'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {searchURL, getcoursedetailURL, detailwithlessonURL, DetailAuthorURL, likecourseURL, courseinfoURL, getfreecoursesURL} from './../../API/Url'


const Api = new API()


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
                color={`${this.props.context.Theme.Color}`}
                ></Icon>
        </TouchableHighlight>
        <Text style={{
          color: `${this.props.context.Theme.Color}`,
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
          <Icon name='delete' size={25} color={`${this.props.context.Theme.Color}`}/>
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
              var val = this.props.context
              const config = {
                headers: { Authorization: `Bearer ${val.Token}` }
            };

              Api.GetRequestWithParameHeader(detailwithlessonURL, this.props.item.id,config).then(res=>{
                if(res)
                {
                  val.toggleVideo(res.data.payload)
                  Api.GetRequestWithParam(DetailAuthorURL, this.props.teachers[this.props.index].id).then(res=>{
                    if(res)
                    {
                      val.toggleTeacher(res.data.payload)             
                      this.props.navigation.navigate('Videoplayer');
                    }
                  })
                }
                else
                {
                  alert('Bạn chưa đăng ký khóa học này! để xem được hãy vui lòng đăng ký khóa học bằng các click vào icon 3 chấm bên phải rồi sao đó ấn Erol me')
                }
              }) 
            }}
          >
            
            <Image style={this.props.strech} source={{uri: this.props.item.imageUrl}}></Image>
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
              }}>{this.props.item.title}</Text>
              <Text style={{
                color: `${this.props.context.Theme.Color}`,
                fontSize: 16
              }}>{this.props.context.Language.Search.Videonumber}: {this.props.item.videoNumber} {this.props.context.Language.Search.Videos}</Text>
              <Text style={{
                color: `${this.props.context.Theme.Color}`,
                fontSize: 16
              }}>{this.props.item.updatedAt}</Text>
              <Text style={{
                color: `${this.props.context.Theme.Color}`,
                fontSize: 16
              }}>{this.props.context.Language.Search.price}: {this.props.item.price} VND</Text>
              <View style={{
                flexDirection: 'row',
              }}>
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
                      })
                    }}>
                    <Text style={{fontSize: 20}}>{this.props.context.Language.Search.Erolme}</Text>
                    </MenuOption >
                   
                    <MenuOption onSelect={()=>{
                      const config = {
                        headers: { Authorization: `Bearer ${this.props.context.Token}` }
                    };
                    var data = {
                      courseId: this.props.item.id
                      
                    }
                      Api.PostRequest(data, likecourseURL, config).then(res=>{
                        if(res)
                        {
                          alert('Bạn đã thêm khóa học này vào danh sách yêu thích')
                        }
                      })
                    }}>
                    <Text style={{fontSize: 20}}>{this.props.context.Language.Search.Addtofavorite}</Text>
                    </MenuOption>
                
                    <MenuOption onSelect={()=>{
                       Api.GetRequestWithParam(courseinfoURL, this.props.item.id).then(res=>{
                        if(res)
                        {
                          this.props.context.toggleCourses(res.data.payload)
                          Api.GetRequestWithParam(DetailAuthorURL, this.props.teachers[this.props.index].id).then(res=>{
                            if(res)
                            {
                              this.props.context.toggleTeacher(res.data.payload)              
                              this.props.navigation.navigate('CoureseDetail')
                            }
                          })
                        }
                      })
                    }}>
                    <Text style={{fontSize: 20}} >{this.props.context.Language.Search.Detail}</Text>
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
            
            <Image style={this.props.strech} source={{uri: this.props.item.avatar}}></Image>
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
              }}>{this.props.item.name}</Text>
              <Text style={{
                color: `${this.props.context.Theme.Color}`,
                fontSize: 16
              }}>{this.props.item.totalCourse} {this.props.context.Language.Search.courses}</Text>
              <View style={{
                flexDirection: 'row',
              }}>
              </View>
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


class All extends Component{
    render()
    {

      var datapaths = []
      if(this.props.courses[0] !== undefined)
      {
        datapaths.push(this.props.courses[0])
      }

        var dataauthors = []
        if(this.props.teachers[0] !== undefined)
        {
          dataauthors.push(this.props.teachers[0])
        }

        return(
          
            <View style={{
              width: '100%',
              height: '100%',
              backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
              marginBottom: 50
          }}>
              <ScrollView>
              <View>
         
                
                </View>
               <View>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: `${this.props.context.Theme.Color}`,
                            marginBottom: 10,
                            marginLeft: 20,
                            marginTop: 10,
                            flex: 1
                        }
                    }>{this.props.context.Language.Search.Courses}</Text>
                    <TouchableHighlight onPress={()=>{
                      this.props.setState(this.props.screenwidth)
                      this.props.Scroll(this.props.screenwidth)
                    }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: `${this.props.context.Theme.Color}`,
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>{this.props.courses.length} {this.props.context.Language.Search.Result} >>></Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: `${this.props.context.Theme.Color}`,
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                <FlatList 
                    data={datapaths}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath item={item} context={this.props.context} index={index} strech={styles.strech} to='CoursesDetail' navigation={this.props.navigation}></Itempath>
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
                            color: `${this.props.context.Theme.Color}`,
                            marginBottom: 10,
                            marginLeft: 20,
                            marginTop: 10,
                            flex: 1
                        }
                    }>{this.props.context.Language.Search.Authors}</Text>
                     <TouchableHighlight onPress={()=>{
                      this.props.setState(this.props.screenwidth*2)
                      this.props.Scroll(this.props.screenwidth*2)
                    }}>
                    <Text style={
                        {
                            fontSize: 18,
                            color: `${this.props.context.Theme.Color}`,
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>{this.props.teachers.length} {this.props.context.Language.Search.Result} >>></Text>
                    </TouchableHighlight>
                </View>
                
              
            </View>
            <View style={{
                    height: 1,
                    backgroundColor: `${this.props.context.Theme.Color}`,
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                  <FlatList 
                    data={dataauthors}
                    renderItem={({index, item})=>{
                    return(
                    <Itemauthor item={item} context={this.props.context} index={index} strech={styles.strech3} navigation={this.props.navigation} to='TeachProfile'></Itemauthor>
                    )
                }}
                >
                </FlatList>
                </ScrollView>
            </View>
            
        )
    }
}


class Paths extends Component{
  render()
  {
   
      return(
          <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
            marginBottom: 50
        }}>
              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: `${this.props.context.Theme.Color}`,
                    marginLeft: 20
                  }}>{this.props.courses.length} {this.props.context.Language.Search.Result}</Text>
              </View>
               <FlatList 
                    data={this.props.courses}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath context={this.props.context}  teachers={this.props.teachers} item={item} index={index} strech={styles.strech} navigation={this.props.navigation} to='CoureseDetail'></Itempath>
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
          <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
            marginBottom: 50
        }}>
            <View style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 10
            }}>
                <Text style={{
                  fontSize: 20,
                  color: `${this.props.context.Theme.Color}`,
                  marginLeft: 20
                }}>{this.props.teachers.length} {this.props.context.Language.Search.Result}</Text>
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
      height: screenheight-255,
      backgroundColor: `${this.props.context.Theme.BackgroundColor}`,
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

  constructor(props)
  {
    super(props)
    this.state = {
      search: null,
      index: 0,
      courses: [],
      teachers: [],
      category:'All',
      idcategory: null,
    };
    this.updateSearch = this.updateSearch.bind(this)
  }

  
  componentWillMount()
  {
    var val = this.context
    this.updateSearch(val.searchkey)
  }
  
  updateSearch = (search,id) => {
    this.setState({ search });
    var val = this.context;
    val.togglesearchkey(search)
    var courses = []
    var teachers = []
    this.setState({
      courses, 
      teachers
    })
    var data = {
      keyword: search,
      opt: {
              category: [
                id
              ]
            }
    }
    if(this.state.idcategory === null && id === undefined)
    {
      console.log(12312321)
      data = {
        keyword: search,
        opt: {
                category: [
                ]
              }
      }
    }

    if(id === undefined && this.state.idcategory !== null)
    {
      data = {
        keyword: search,
        opt: {
                category: [
                  this.state.idcategory
                ]
              }
      }
    }

    console.log(data)
    Api.PostRequest(data, searchURL,null).then(res=>{
      if(res)
      {
          res.data.payload.rows.map((value)=>{
          courses.push(value)
          Api.GetRequestWithTwoParam(getcoursedetailURL, value.id, val.Account.id).then(res=>{
            if(res)
            {
              teachers.push(res.data.payload.instructor)
              this.setState({
                courses, 
                teachers,
              })
            }
          }) 
        })
      }
    }) 
    
  };


  onCancel=()=>{
    var val = this.context
    var {search} = this.state
    val.toggleHistory(search)
    this.setState({search: null})
  }

  setIndex = (index)=>{
    this.setState({index})
  }

  Scroll = (loca)=>{
    this.scroll.scrollTo({x: loca})
  }
   
    render()
    {
      var { search, videos, teachers, courses} = this.state;
      let rend = null
      let screenwidth = Dimensions.get('window').width
      let screenheight = Dimensions.get('window').height
      var {index} = this.state
      var val = this.context
      var menu = []
      
      val.categoryall.map(value=>{
        menu.push(<MenuOption onSelect={()=>{
        this.setState({
          category: value.name,
          idcategory: value.id
        })
        if(this.state.search)
        {
          this.updateSearch(this.state.search,value.id)
        }
        else 
        {
          this.updateSearch('',value.id)
        }
        }}>
              <Text style={{fontSize: 20}}>{value.name}</Text>
          </MenuOption>)
      })
      if(this.state.search===null)
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
              }} style={index === 0 ? styles.txtitemforcus:styles.txtitem}><Text>{val.Language.Search.ALL}</Text></View>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: screenwidth })
                this.setState({index: screenwidth})
              }} style={index === screenwidth ? styles.txtitemforcus:styles.txtitem}><Text>{val.Language.Search.COURSES}</Text></View>
              <View onStartShouldSetResponder={()=>{
                this.scroll.scrollTo({ x: screenwidth*2 })
                this.setState({index: screenwidth*2})
              }} style={index === screenwidth*2 ? styles.txtitemforcus:styles.txtitem}><Text>{val.Language.Search.AUTHORS}</Text></View>
            </View>
            <ScrollView>
                <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                scrollEventThrottle={1}
                onMomentumScrollEnd={(e)=>{
                  this.setState({index: e.nativeEvent.contentOffset.x})
                }}
                ref={(node) => this.scroll = node}
                >
                    <View style={{
                        width: screenwidth,
                        height: screenheight-305,
                                
                    }}>
                       <All context={val} Scroll={this.Scroll} screenwidth={screenwidth} setState={this.setIndex} index={index} courses={courses} teachers={teachers} navigation={this.props.navigation}></All>
                    </View>
                    <View style={{
                        width: screenwidth,
                        height: screenheight-305,
                    }}>
                       <Paths context={val} courses={courses} teachers={teachers} navigation={this.props.navigation}></Paths>
                    </View>

                    <View style={{
                        width: screenwidth,
                        height: screenheight-305,
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
                        on
                      />
                      <View style={{
                        flexDirection:'row',
                        justifyContent: 'center',
                        alignItems:'center'
                      }}>
                      <Text style={{
                       fontSize: 20,
                       color: `black`
                     }}>{val.Language.Search.category}</Text>
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
                      marginLeft: 10,
                      width: 350,
                      marginBottom: 10,
                      marginTop: 10,
                      marginRight: 10,
                   }}>
                     <Text style={{
                       fontSize: 20,
                       color: `black`,
                       flex: 1
                     }}>{this.state.category}</Text>
                     <Icon name='keyboard-arrow-down' size={28} color={`black`}/>
                   </View>
                </MenuTrigger>
                <MenuOptions style={{
                   justifyContent: 'center',
                   alignItems: 'center',
                }}>
                    {menu}
                </MenuOptions>
                </Menu>
                
                </View>
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
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
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