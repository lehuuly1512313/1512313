import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image,Keyboard  } from 'react-native';
import {Mycontext} from './../../Context/Mycontext'
import { Icon } from 'react-native-elements'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import API from './../../API/Api'
import {ratingcourseURL} from './../../API/Url'
const Api = new API()
const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}

export default class Rating extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            formalityPoint: 0,
            contentPoint: 0,
            presentationPoint: 0,
            contents: '',
            notification:''
        }
        this.handleContents = this.handleContents.bind(this)
    }


    rendermenuformalityPoint = ()=>{
        var val = this.context
        return(
            <Menu>
         <MenuTrigger>
            <View style={{
               borderRadius: 25,
               padding: 10,
               flexDirection: 'row',
               justifyContent:'center',
               alignItems:'center',
               backgroundColor: `${val.Theme.InputColor}`
            }}>
              <Text style={{
                fontSize: 24,
                color: `${val.Theme.BackgroundColor}`,
                flex: 1
              }}>{this.state.formalityPoint}</Text>
              <Icon name='keyboard-arrow-down' size={28} color={`${val.Theme.BackgroundColor}`}/>
            </View>
         </MenuTrigger>
         <MenuOptions style={{
            justifyContent: 'center',
            alignItems: 'center',
         }}>
             <MenuOption onSelect={()=>{
                this.setState({formalityPoint: 0})
             }}>
             <Text style={{fontSize: 20}}>0</Text>
             </MenuOption>
             
             <MenuOption onSelect={()=>{
                 this.setState({formalityPoint: 1})
            }}>
            <Text style={{fontSize: 20}}>1</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({formalityPoint: 2})
            }}>
            <Text style={{fontSize: 20}}>2</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({formalityPoint: 3})
            }}>
            <Text style={{fontSize: 20}}>3</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({formalityPoint: 4})
            }}>
            <Text style={{fontSize: 20}}>4</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({formalityPoint: 5})
            }}>
            <Text style={{fontSize: 20}}>5</Text>
             </MenuOption> 
             
         </MenuOptions>
         </Menu>
        )
    }

    rendermenucontentPoint = ()=>{
        var val = this.context
        return(
            <Menu>
         <MenuTrigger>
            <View style={{
               borderRadius: 25,
               padding: 10,
               flexDirection: 'row',
               justifyContent:'center',
               alignItems:'center',
               backgroundColor: `${val.Theme.InputColor}`
            }}>
              <Text style={{
                fontSize: 24,
                color: `${val.Theme.BackgroundColor}`,
                flex: 1
              }}>{this.state.contentPoint}</Text>
              <Icon name='keyboard-arrow-down' size={28} color={`${val.Theme.BackgroundColor}`}/>
            </View>
         </MenuTrigger>
         <MenuOptions style={{
            justifyContent: 'center',
            alignItems: 'center',
         }}>
             <MenuOption onSelect={()=>{
                this.setState({contentPoint: 0})
             }}>
             <Text style={{fontSize: 20}}>0</Text>
             </MenuOption>
             
             <MenuOption onSelect={()=>{
                 this.setState({contentPoint: 1})
            }}>
            <Text style={{fontSize: 20}}>1</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({contentPoint: 2})
            }}>
            <Text style={{fontSize: 20}}>2</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({contentPoint: 3})
            }}>
            <Text style={{fontSize: 20}}>3</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({contentPoint: 4})
            }}>
            <Text style={{fontSize: 20}}>4</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({contentPoint: 5})
            }}>
            <Text style={{fontSize: 20}}>5</Text>
             </MenuOption> 
             
         </MenuOptions>
         </Menu>
        )
    }

    rendermenupresentationPoint = ()=>{
        var val = this.context
        return(
            <Menu>
         <MenuTrigger>
            <View style={{
               borderRadius: 25,
               padding: 10,
               flexDirection: 'row',
               justifyContent:'center',
               alignItems:'center',
               backgroundColor: `${val.Theme.InputColor}`
            }}>
              <Text style={{
                fontSize: 24,
                color: `${val.Theme.BackgroundColor}`,
                flex: 1
              }}>{this.state.presentationPoint}</Text>
              <Icon name='keyboard-arrow-down' size={28} color={`${val.Theme.BackgroundColor}`}/>
            </View>
         </MenuTrigger>
         <MenuOptions style={{
            justifyContent: 'center',
            alignItems: 'center',
         }}>
             <MenuOption onSelect={()=>{
                this.setState({presentationPoint: 0})
             }}>
             <Text style={{fontSize: 20}}>0</Text>
             </MenuOption>
             
             <MenuOption onSelect={()=>{
                 this.setState({presentationPoint: 1})
            }}>
            <Text style={{fontSize: 20}}>1</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({presentationPoint: 2})
            }}>
            <Text style={{fontSize: 20}}>2</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({presentationPoint: 3})
            }}>
            <Text style={{fontSize: 20}}>3</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({presentationPoint: 4})
            }}>
            <Text style={{fontSize: 20}}>4</Text>
             </MenuOption> 
             <MenuOption onSelect={()=>{
                 this.setState({presentationPoint: 5})
            }}>
            <Text style={{fontSize: 20}}>5</Text>
             </MenuOption> 
             
         </MenuOptions>
         </Menu>
        )
    }

    handleContents = (txt)=>
    {
        this.setState({contents: txt})
    }

  render()
  {
    var val = this.context
    return(
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: `${val.Theme.BackgroundColor}`,
        justifyContent: 'center'
      }} onStartShouldSetResponder={()=>{
        Keyboard.dismiss()
    }}>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <View style={{marginRight: 5}}><Image source={img} style={styles.strech}></Image></View>
          <View style={{marginLeft: 5}}><Text style={{
                              color: `${val.Theme.Color}`,
                              fontSize: 40,
                              fontWeight: 'bold'}}>PLURALSIGHT</Text></View>
      </View>
      <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Videoplayer.formalityPoint}</Text>
                    {this.rendermenuformalityPoint()}
                </View>
                <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Videoplayer.contentPoint}</Text>
                   {this.rendermenucontentPoint()}
                </View>
                <View style={styles.flex}>
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Videoplayer.presentationPoint}</Text>
                    {this.rendermenupresentationPoint()}
                </View>

                <View style={styles.flex} >
                    <Text style={{
                      fontSize: 20,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{val.Language.Contact.Contentyourfeedback}</Text>
                    <TextInput onChangeText={this.handleContents} placeholder='Contents' multiline={true} style={{
                      padding: 10,
                      fontSize: 20,
                      borderRadius: 20,
                      backgroundColor: `${val.Theme.InputColor}`,
                      height: 150,
                      textAlignVertical: 'top'
                    }} ></TextInput>
                </View>
      <View style={styles.flex}>
                    <TouchableHighlight onPress={()=>{
                        var data = {
                            courseId: "24b1856a-953c-419b-84c5-a9ef44bc139e",
                            formalityPoint: this.state.formalityPoint,
                            contentPoint: this.state.contentPoint,
                            presentationPoint: this.state.presentationPoint,
                            content: this.state.contents
                          }
                        const config = {
                            headers: { Authorization: `Bearer ${val.Token}` }
                        };
                        Api.PostRequest(data,ratingcourseURL, config).then(res=>{
                            if(res)
                            {
                              this.setState({notification: 'Đánh giá khóa học thành công!!!'})
                              setTimeout(() => {
                                this.props.navigation.goBack()
                              }, 1000);
                            }
                          })
                    }} style={styles.btn}>
                        <Text style={styles.txtbtn}>{val.Language.Videoplayer.BookMarked}</Text>
                    </TouchableHighlight>
                    <Text style={{
                      fontSize: 30,
                      marginBottom: 10,
                      color: `${val.Theme.Color}`
                    }}>{this.state.notification}</Text>
                </View>
                
  </View>
    )
  }
}

Rating.contextType = Mycontext

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#1b2133',
      justifyContent: 'center',
  },
  flex:{
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
  },
  flex2:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  text1:{
      fontSize: 25,
      marginBottom: 20,
      color: 'white'
  },
  textin1:{
      padding: 10,
      fontSize: 20,
      borderRadius: 50,
      backgroundColor: '#d3d3d3'
  },
  strech:{
      width: 100,
      height: 100,
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
      borderRadius: 50,
      backgroundColor: 'gray',
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
  txtbtn4:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});