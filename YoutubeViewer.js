import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Youtube            from 'react-native-youtube';
import API              from './API'

export default class YoutubeViewer extends Component<{}> {
  static navigationOptions={
    title: 'Youtube Viewer',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }

  constructor(props){
    super(props)

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.youtubeId}</Text>
              <Youtube
                ref={(component) => { this._youTubePlayer = component }}
                videoId={this.props.navigation.state.params.youtubeId}
                play={true}
                fullscreen={true}
                loop={false}z
                apiKey={API.YOUTUBE_API}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}

                style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
                >
              </Youtube>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 40,
  },

});



