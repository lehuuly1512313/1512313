import React, {Component} from 'react'
import { Text,Picker, Switch, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"
import { Icon } from 'react-native-elements'

export default class Setting extends Component{


  constructor(props)
  {
    super(props)
    this.state={
      isEnabled: false,
      isEnabled1: false
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
    this.toggleSwitch1 = this.toggleSwitch1.bind(this)
  }

  toggleSwitch=()=>{
    let {isEnabled} = this.state;
    isEnabled = !isEnabled
    this.setState({
      isEnabled
    })
  }

  toggleSwitch1=()=>{
    let {isEnabled1} = this.state;
    isEnabled1 = !isEnabled1
    this.setState({
      isEnabled1
    })
  }

  render()
  {
    return(<View style={styles.container}>
      <View style={{
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',  
        
        alignItems: 'center'       
      }}>
        <Text style={{
          fontSize: 20,
          color: 'black',
          marginLeft: 10,
          fontWeight: 'bold',
          flex: 1,
        }}>Setting</Text>
      </View>
     
      <ScrollView style={{ alignSelf: 'stretch',}}>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Account</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Subcription</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Subcription</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Communication Preferences</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Communication Preferences</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Theme</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Theme</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Require Wi Fi for streaming</Text>
                <Switch
                  trackColor={{ false: "darkgray", true: "#006400" }}
                  thumbColor={ "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleSwitch}
                  value={this.state.isEnabled}
                  style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                />
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Require Wi Fi for Downloading</Text>
              
                 <Switch
                  trackColor={{ false: "darkgray", true: "#006400" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleSwitch1}
                  value={this.state.isEnabled1}
                  style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                />
                
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Send feedback</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
       
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
                
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>Contact support</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
          <DropDownItem
            key={1}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View style={{
                flexDirection:'row',
                backgroundColor:'gray',
                borderRadius: 25,
                padding:15,
                marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
              }}>
                <Text style={{
                  fontSize: 18,
                  color: 'white',
                  flex: 1,
                }}>App version</Text>
                <Icon name='keyboard-arrow-right' size={28} color={'black'}/>
              </View>
            }>
           <View style={{
             justifyContent:'center',
           }}>
             <View style={{
               alignItems:'center',
               flex: 1,
             }}>
               <Text>Account</Text>
             </View>
             
           </View>
          </DropDownItem>
          <View style={styles.flex}>
                    <TouchableHighlight onPress={this.handlePressSignIn} style={styles.btn2}>
                        <Text style={styles.txtbtn2}>Sign out</Text>
                    </TouchableHighlight>
                </View>
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
      borderRadius: 60
  },
  strech2:{
    width: 24,
    height: 15,
    justifyContent: 'flex-end',
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
    fontSize: 18,
    marginTop: 5
  }
});