import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableHighlight,TextInput,Image, FlatList,ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item"


export default class CoursesDetail extends Component{
  render()
  {
    return(
      <View style={styles.container}>
        <View style={{
          height: 40,
          backgroundColor: 'white',
          flexDirection: 'row',          
        }}>
          <Text style={{
            fontSize: 20,
            color: 'black',
            marginLeft: 10,
            fontWeight: 'bold',
            flex: 1,
          }}>Courses Detail</Text>
        </View>
       
        <ScrollView style={{ alignSelf: 'stretch' }}>
            <DropDownItem
              key={1}
              style={styles.dropDownItem}
              contentVisible={false}
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'blue',
                  }}>Coureses</Text>
                </View>
              }>
              
            </DropDownItem>
            <DropDownItem
              key={1}
              style={styles.dropDownItem}
              contentVisible={false}
              
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'blue',
                  }}>Teacher</Text>
                </View>
              }>
              
            </DropDownItem>
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
    fontSize: 16,
  }
});