import React, {Component} from 'react'
import { Text, View , ScrollView ,Button, StyleSheet, TouchableHighlight,TextInput,  Dimensions, Image, FlatList } from 'react-native';
import Modal from 'react-native-modalbox'
import { color } from 'react-native-reanimated';

export default class Share extends Component{

  showshare=()=>{
    this.refs.me.open()
  }

  render()
  {
    return(
      <Modal
      ref={'me'}
       style={{
        height: '45%',
        
        backgroundColor: 'white'
      }}
      position='center'
      backdrop={true}
      >
       <Text style={{
         margin: 20,
         color: 'darkcyan',
         fontSize: 20,
       }}>Share courses</Text> 
        
          <View>
            <View style={styles.content}>
              <View style={{
                    alignItems: 'center',

                    flex: 1
                  }}><Image source={{uri: 'https://png.pngtree.com/element_our/png_detail/20181206/folder-vector-icon-png_260858.jpg'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                    
                    }}></Image>
                    <Text>My located drive</Text>
                    </View>
              <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://icons-for-free.com/iconfiles/png/512/phone+send+sms+icon-1320191835303044284.png'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                   
                    }}></Image>
                    <Text>SMS</Text></View>
              <View style={{
                    alignItems: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://lh3.googleusercontent.com/qTG9HMCp-s_aubJGeQWkR6M_myn-aXDJnraWn9oePcY1dGbYqXibaeLQBAeMdmxSBus'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    }}></Image>
                    <Text>Gmail</Text></View>
            </View>
            
            <View style={styles.content}>
              <View style={{
                    alignItems: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                    
                    }}></Image>
                    <Text>Google drive</Text>
                    </View>
              <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://lh3.googleusercontent.com/rkBi-WHAI-dzkAIYjGBSMUToUoi6SWKoy9Fu7QybFb6KVOJweb51NNzokTtjod__MzA'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                   
                    }}></Image>
                    <Text>Messenger</Text></View>
              <View style={{
                    alignItems: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://i.pinimg.com/originals/47/dd/0d/47dd0dbacde6aa821ad355c75452fe1c.png'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    }}></Image>
                    <Text>Bluetooth</Text></View>
            </View>
            <View style={styles.content}>
              <View style={{
                    alignItems: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/1024px-Google_Chrome_icon_%282011%29.svg.png'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                    
                    }}></Image>
                    <Text>Chrome</Text>
                    </View>
              <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    
                   
                    }}></Image>
                    <Text>Facebook</Text></View>
              <View style={{
                    alignItems: 'center',
                    flex: 1
                  }}><Image source={{uri: 'https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc'}} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    }}></Image>
                    <Text>Youtube</Text></View>
            </View>
          </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({

  content:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    
  },
});