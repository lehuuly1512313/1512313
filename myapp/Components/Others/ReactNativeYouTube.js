import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, View , TouchableHighlight} from 'react-native';

import {Mycontext} from './../../Context/Mycontext'
import API from './../../API/Api'
import {updatecurrenttimelearnvideoURL} from './../../API/Url'
const Api = new API()

export default class ReactNativeYouTube extends React.Component {

  constructor(props)
  {
    super(props)
    this.state={
      playing: true,
    }
  }


  render() {
    var val = this.context
    console.log(this.props.currentTime)
    return (
      <View>
      <YoutubePlayer
        ref={'me'}
        height={300}
        videoId={this.props.id}
        play={this.state.playing}
        onChangeState={event => {
          console.log(event)
          if(event === 'paused')
          {
            this.refs.me.getCurrentTime().then(currentTime => {
              var data = {
                lessonId: this.props.lessonId,
                currentTime
              }
              const config = {
                headers: { Authorization: `Bearer ${val.Token}` }
            };

            Api.PutRequest(data,updatecurrenttimelearnvideoURL,config).then(res=>{
              if(res)
              {
                console.log('done')
              }
            })
            });
          }
        }
        }
        onReady={() => {
          if(this.props.currentTime)
            {
            this.refs.me.seekTo(this.props.currentTime)
            }
        }}
        onError={e => console.log(e)}
        onPlaybackQualityChange={q => console.log(q)}
        volume={50}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true
        }}
/>

</View>
    );
  }
}


ReactNativeYouTube.contextType = Mycontext