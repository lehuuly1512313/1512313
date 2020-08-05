import React, {Component} from 'react'
import {Mycontext} from './../../Context/Mycontext'
const img = {uri : 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg'}
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Picker,
  ProgressBarAndroid,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import { Icon } from 'react-native-elements'
import info from './info'

class ReactNativeVideo extends Component{
  constructor(props) {
    super(props);

    // init state variables
    this.state = {
      rate: 1,
      volume: 50,
      muted: false,
      resizeMode: 'stretch',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
      pickerValueHolder: '1.0',
      pausedText: 'play-arrow',
      hideControls: false,
    }
  }

  // load video event
  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  // video is playing
  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  // video ends
  onEnd = () => {
    this.setState({ paused: true, pausedText: 'play-arrow'})
    this.setState({currentTime: 0.0})
    this.refs.me.seek(0)
  };

  onSeekLeft10s = ()=>{
      var timeseek = this.state.currentTime-10
      this.refs.me.seek(timeseek)
      this.setState({currentTime: timeseek})
  }

  onSeekRight10s = ()=>{
    var timeseek = this.state.currentTime+10
      this.refs.me.seek(timeseek)
      this.setState({currentTime: timeseek})
}

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  onChangeRate(itemValue, itemIndex) {
    var rate = parseFloat(itemValue);
    this.setState({pickerValueHolder: itemValue, rate: rate});
  }

  // pressing on 'play' button
  onPressBtnPlay() {
    var pausedText = '';
    if(!this.state.paused){
      pausedText = 'play-arrow';

      // always show controls
      if(this.timeoutHandle)
        clearTimeout(this.timeoutHandle);
    }
    else {
      pausedText = 'pause';

      // hide controls after 5s
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 5000);
    }
    this.setState({ paused: !this.state.paused, pausedText: pausedText });
  }

  // on press video event
  onPressVideo() {
    // showing controls if they don't show
    if(this.state.hideControls){
      this.setState({hideControls: false});
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 8000);
    }
  }

  // parse seconds to time (hour:minute:second)
  parseSecToTime(sec) {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    return hours + ':' + minutes + ':' + seconds;
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.fullScreen}
          onPress={() => this.onPressVideo()}>
          <Video
            ref={'me'}
            source={info[this.props.url]} 
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableWithoutFeedback>
        {
          !this.state.hideControls ?
          (
            <View style={styles.controls}>
              <View style={styles.generalControls}>
                <View style={{
                    flexDirection: 'row'
                }}>
                <View style={styles.rateControl}>
                  <Picker
                    style={{width: 110}}
                    selectedValue={this.state.pickerValueHolder}
                    onValueChange={(itemValue, itemIndex) => this.onChangeRate(itemValue, itemIndex)} >
                    <Picker.Item label="x1.5" value="1.5"/>
                    <Picker.Item label="x1.25" value="1.25"/>
                    <Picker.Item label="x1.0" value="1.0"/>
                    <Picker.Item label="x0.75" value="0.75"/>
                    <Picker.Item label="x0.5" value="0.5"/>
                  </Picker>
                </View>
                <Icon onPress={() => this.onSeekLeft10s()} name='rotate-left' size={40} color={`black`}/>
                <View style={styles.playControl}>
                  <Icon onPress={() => this.onPressBtnPlay()} name={this.state.pausedText} size={40} color={`black`}/>
                </View>
                <Icon onPress={() => this.onSeekRight10s()} name='rotate-right' size={40} color={`black`}/>
                <View style={styles.resizeModeControl}>
                  <Picker
                    style={{width: 150}}
                    selectedValue={this.state.resizeMode}
                    onValueChange={(itemValue, itemIndex) => this.setState({resizeMode: itemValue})} >
                    <Picker.Item label="none" value="none"/>
                    <Picker.Item label="cover" value="cover"/>
                    <Picker.Item label="stretch" value="stretch"/>
                    <Picker.Item label="contain" value="contain"/>
                  </Picker>
                </View>
              </View>
              </View>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <ProgressBarAndroid
                  style={styles.progress}
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={this.getCurrentTimePercentage()}
                  color={'red'}
                  indeterminate = { false }
                  onStartShouldSetResponder={()=>{
                  }}
                />
                <Text>{this.parseSecToTime(parseInt(this.state.currentTime))}/{this.parseSecToTime(parseInt(this.state.duration))}</Text>
              </View>
            </View>
          ) : (null)
        }

        
      </View>
    );
  }
}

export default class PlayVideoDownload extends Component{
  render()
  {
      var val = this.context
      var path = `./../../DownloadFilePro/${val.Video.id}.mp4`
    return(
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: `${val.Theme.BackgroundColor}`,
      }}>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20
          }}>
           <View style={{marginRight: 5}}><Image source={img} style={styles.strech}></Image></View>
                    <View style={{marginLeft: 5}}>
                        <Text style={{
                              color: `${val.Theme.Color}`,
                              fontSize: 40,
                              fontWeight: 'bold'}}
                        >PLURALSIGHT</Text>
            </View>
            </View>
          <ReactNativeVideo url={val.Video.id}></ReactNativeVideo>
          <Text style={{
            fontSize: 20,
            color: `${val.Theme.Color}`,
            marginTop: 20
          }}>***{val.Language.PlayVideoDownload.Title}:  {val.Video.title}</Text>
          <Text style={{
            fontSize: 20,
            color: `${val.Theme.Color}`,
          }}>***{val.Language.PlayVideoDownload.Path}:  {path}</Text>
          <Text style={{
            fontSize: 20,
            color: `${val.Theme.Color}`,
          }}>***{val.Language.PlayVideoDownload.Size}:  45MB</Text>
    </View>
    )
  }
}

PlayVideoDownload.contextType = Mycontext
const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  playButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  controls: {
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 5,
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    height: 5,
    width: '100%'
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'center'
  },
  playControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
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