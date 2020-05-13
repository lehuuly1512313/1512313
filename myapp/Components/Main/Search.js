import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'


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
                        backgroundColor: 'red',
                        height: screenheight-124,
                                
                    }}>
                       
                    </View>
                    <View style={{
                        width: screenwidth,
                        backgroundColor: 'blue',
                        height: screenheight-124,
                    }}>
                       
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
                    <View style={styles.txtitem}><Text>All</Text></View>
                    <View style={styles.txtitem}><Text>Topic</Text></View>
                    <View style={styles.txtitem}><Text>Path</Text></View>
                    <View style={styles.txtitem}><Text>Author</Text></View>
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
    
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    txtitem2:{
        color: 'black',
        fontSize: 16,
      }
  });