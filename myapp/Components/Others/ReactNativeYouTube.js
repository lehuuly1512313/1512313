import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, View , TouchableHighlight} from 'react-native';

export default class ReactNativeYouTube extends React.Component {

  constructor(props)
  {
    super(props)
    this.state={
      playing: true,
      currentTime: 0
    }
  }

  render() {
    return (
      <View>
      <YoutubePlayer
        ref={'me'}
        height={300}
        videoId={this.props.id}
        play={this.state.playing}
        onChangeState={event => console.log(event)}
        onReady={() => console.log("ready")}
        onError={e => console.log(e)}
        onPlaybackQualityChange={q => console.log(q)}
        volume={50}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true
        }}
/>
        <TouchableHighlight onPress={ ()=>{
          // this.refs.me.getCurrentTime().then(currentTime => 
          //   {
          //     console.log(currentTime)
          //   });
          // this.refs.me.seekTo(22)
        }}>
          <Text>
            Download
          </Text>
        </TouchableHighlight>
</View>
    );
  }
}
