import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'


const data1 = [
    {
      name: 'React JS',
      img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
      description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
      ratting: 3
    },
    {
      name: 'React JS',
      img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
      description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
      ratting: 4
    },
    {
      name: 'React JS',
      img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
      description:'“Love Poem” is a twenty-four-line poem in six stanzas of four lines each; the second and fourth lines of each stanza rhyme.',
      ratting: 4
    },
  ]

  const data2 = [
    {
      name: 'React JS',
      img: 'https://1.bp.blogspot.com/-4x1jlkRRQFk/Wq5aQ5q79MI/AAAAAAAAAWc/4Mgk7PnjVPs1G01W9PMf1UdnBaab5H4ggCPcBGAYYCw/s1600/wallhaven-461264.png',
      courses: 12
    },
  ]

  const data3 = [
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
          }}>
            
            <Image style={this.props.strech} source={{uri: this.props.item.img}}></Image>
            
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
              <Text style={styles.txtitem2}>{this.props.item.courses} courses</Text>
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
          }}>
            
            <Image style={styles.strech} source={{uri: this.props.item.img}}></Image>
            
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
        let datacourse = []
        datacourse.push(data1[0])
        datacourse.push(data1[1])
        let dataauthors = []
        dataauthors.push(data3[0])
        dataauthors.push(data3[1])
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
                    }>Courses</Text>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>4 Result ></Text>
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
                    <Item item={item} index={index}></Item>
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
                    }>Paths</Text>
                    <Text style={
                        {
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 10,
                            marginTop: 10,
                            marginRight: 20
                        }
                    }>1 Result ></Text>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
                    marginLeft: 20,
                    marginRight: 20
                }}></View>
                <FlatList 
                    data={data2}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath item={item} index={index} strech={styles.strech}></Itempath>
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
                    }>4 Result ></Text>
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
                    <Itempath item={item} index={index} strech={styles.strech3}></Itempath>
                    )
                }}
                >
                </FlatList>
                </ScrollView>
            </View>
            
        )
    }
}

class Courses extends Component{
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
                    }}>4 Result</Text>
                    <Text style={{
                      fontSize: 18,
                      color: 'white',
                      marginRight: 20
                    }}>Newest</Text>
                </View>
                <FlatList 
                data={data1}
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
                  }}>1 Result</Text>
              </View>
               <FlatList 
                    data={data2}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath item={item} index={index} strech={styles.strech}></Itempath>
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
                }}>4 Result</Text>
            </View>
               <FlatList 
                    data={data3}
                    renderItem={({index, item})=>{
                    return(
                    <Itempath item={item} index={index} strech={styles.strech3}></Itempath>
                    )
                }}
                >
                </FlatList>
              
          </View>
      )
  }
}

class Horizontalsroll extends Component{
    render()
    {
        let screenwidth = Dimensions.get('window').width
        let screenheight = Dimensions.get('window').height
        return(
                
            <ScrollView scrollEventThrottle={10}>
                <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                
                >
                    <View style={{
                        width: screenwidth,
                        height: screenheight-124,
                                
                    }}>
                       <All></All>
                    </View>
                    <View style={{
                        width: screenwidth,
                        height: screenheight-124,
                    }}>
                       <Courses></Courses>
                    </View>

                    <View style={{
                        width: screenwidth,
                        height: screenheight-124,
                    }}>
                       <Paths></Paths>
                    </View>

                    <View style={{
                        width: screenwidth,
                        height: screenheight-124,
                    }}>
                       <Authors></Authors>
                    </View>
                    </ScrollView>
                    
            </ScrollView>
    
             
        )
    }
}



export default class Search extends Component{
    render()
    {
       
        return(
            <View>
                <View style={{
                    height: 50,
                    flexDirection: 'row'
                }}>
                    <View style={styles.txtitem}><Text>ALL</Text></View>
                    <View style={styles.txtitem}><Text>COURSES</Text></View>
                    <View style={styles.txtitem}><Text>PATHS</Text></View>
                    <View style={styles.txtitem}><Text>AUTHORS</Text></View>
                </View>
                <Horizontalsroll></Horizontalsroll>
                <View  style={{
                    height: 50,
                }}>         
                </View>
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
    txtitem2:{
        color: 'white',
        fontSize: 16,
      }
  });