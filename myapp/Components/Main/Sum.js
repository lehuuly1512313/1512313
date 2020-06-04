import React, {Component} from 'react'
import { Icon } from 'react-native-elements'
import { Text,  View, StyleSheet, AsyncStorage, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import Search from './Search'
import Browser from './Browser'
import Download from './Download'
import Home from './Home'
import {Mycontext} from './../../Context/Mycontext'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export default class Sum extends Component{

    constructor(props)
    {
        super(props)
        this.showhome = this.showhome.bind(this)
        this.showdownload = this.showdownload.bind(this)
        this.showbrowse = this.showbrowse.bind(this)
        this.showsearch = this.showsearch.bind(this)
        this._retrieveData = this._retrieveData.bind(this)
        this.state ={
            showhome: true,
            showdownload: false,
            showbrowse: false,
            showsearch: false,
            name: 'Home',
            Account: null
        }
        
    }

    _retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            this.setState({
                Account: value
            })
            
          }
        } catch (error) {
        }
      };

    showhome=()=>
    {
        this.setState({
            showhome: true,
            showdownload: false,
            showbrowse: false,
            showsearch: false,
            name: 'Home'
        })
        
    }

    showdownload=()=>
    {
        this.setState({
            showhome: false,
            showdownload: true,
            showbrowse: false,
            showsearch: false,
            name: 'Download'
        })
        
    }

    showbrowse=()=>
    {
        this.setState({
            showhome: false,
            showdownload: false,
            showbrowse: true,
            showsearch: false,
            name: 'Browse'
        })
        
    }

    showsearch=()=>
    {
        this.setState({
            showhome: false,
            showdownload: false,
            showbrowse: false,
            showsearch: true,
            name: 'Search'
        })
        
    }

    render()
    {
        let screenwidth = Dimensions.get('window').width
        let screenheight = Dimensions.get('window').height
        var val = this.context
        var img = null
        if(val.Account)
        {
            img = (
                <Image source={{uri: val.Account.Avatar }} style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 5

          }}></Image>
            )
        }
        else
        {
            img = (
                <Image source={{uri: 'https://i.stack.imgur.com/l60Hf.png' }} style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 5

          }}></Image>
            )
        }
        return(
            <View>
                 <View>
      
        <View style={{
          height: 50,
          backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: "black"
        }}>
          <Text style={styles.txtitem}>{this.state.name}</Text>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems:'center',
              marginRight: 20
          }} onStartShouldSetResponder={
              ()=>{this.props.navigation.navigate('Profile')}
          }>{img}
             {/* <Icon
              name='more-vert'
              size={40}
              color={'black'}
               /> */}
               
               <Menu>
                <MenuTrigger>
                    <Icon
                name='more-vert'
                size={40}
                color={'black'}
                />
                </MenuTrigger>
                <MenuOptions style={{
                   justifyContent: 'center',
                   alignItems: 'center',
                }}>
                    <MenuOption onSelect={()=>{
                        this.props.navigation.navigate('Profile')
                    }}>
                    <Text style={{fontSize: 20}}>Profile</Text>
                    </MenuOption >
                    <MenuOption onSelect={()=>{
                        this.props.navigation.navigate('Setting')
                    }}>
                    <Text style={{fontSize: 20}}>Setting</Text>
                    </MenuOption>
                    <MenuOption onSelect={()=>{
                        this.props.navigation.navigate('Start')
                    }}>
                    <Text style={{fontSize: 20}} >Sign Out</Text>
                    </MenuOption> 
                </MenuOptions>
                </Menu>
                
          </View>
        </View>
        </View>
                {this.state.showhome ? (
                    <Home navigation={this.props.navigation}></Home>
                ): null}
                {this.state.showdownload ? (
                    <Download navigation={this.props.navigation}></Download>
                ): null}
                {this.state.showbrowse ? (
                    <Browser navigation={this.props.navigation}></Browser>
                ): null}
                {this.state.showsearch ? (
                    <Search navigation={this.props.navigation}></Search>
                ): null}

           
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    
                }}>
                    <View style={styles.txtitem} onStartShouldSetResponder={this.showhome}><Icon name='home' size={28} color={this.state.showhome ? '#517fa4':'black'}/><Text style={{color: this.state.showhome ? '#517fa4':'black', fontSize: 16}}>Home</Text></View>
                    <View style={styles.txtitem} onStartShouldSetResponder={this.showdownload}><Icon name='file-download' size={28} color={this.state.showdownload ? '#517fa4':'black'}/><Text style={{color: this.state.showdownload ? '#517fa4':'black', fontSize: 16}}>Download</Text></View>
                    <View style={styles.txtitem} onStartShouldSetResponder={this.showbrowse}><Icon name='open-in-browser' size={28} color={this.state.showbrowse ? '#517fa4':'black'}/><Text style={{color: this.state.showbrowse ? '#517fa4':'black', fontSize: 16}}>Browse</Text></View>
                    <View style={styles.txtitem} onStartShouldSetResponder={this.showsearch}><Icon name='search' size={28} color={this.state.showsearch ? '#517fa4':'black'}/><Text style={{color: this.state.showsearch ? '#517fa4':'black', fontSize: 16}}>Search</Text></View>
                </View>
            </View>
        )
    }
}

Sum.contextType = Mycontext

const styles = StyleSheet.create({

    txtitem:{
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      marginLeft: 20,
      fontSize: 20,
      fontWeight:'bold', 
    },
    
  });