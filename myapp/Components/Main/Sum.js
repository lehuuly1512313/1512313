import React, {Component} from 'react'
import { Icon } from 'react-native-elements'
import { Text,  View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList, ScrollView, Dimensions } from 'react-native'
import Search from './Search'
import Browser from './Browser'
import Download from './Download'
import Home from './Home'




export default class Sum extends Component{

    constructor(props)
    {
        super(props)
        this.showhome = this.showhome.bind(this)
        this.showdownload = this.showdownload.bind(this)
        this.showbrowse = this.showbrowse.bind(this)
        this.showsearch = this.showsearch.bind(this)
        this.state ={
            showhome: true,
            showdownload: false,
            showbrowse: false,
            showsearch: false,
            name: 'Home'
        }
    }

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
          }><Image source={{uri: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg'}} style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 5

          }}></Image>
         <Icon name='more-vert' size={40} color={'black'}/>
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