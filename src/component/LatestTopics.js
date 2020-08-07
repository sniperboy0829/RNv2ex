import React from 'react';
import Feed from './Feed';
import {connect} from 'react-redux';
import {LATEST_TOPICS_LOADED} from '../Actions/actionTypes';

const mapDispatchtoProps = (dispatch) => ({
  onLoad: (payload) => {
    dispatch({type: LATEST_TOPICS_LOADED, payload: payload});
  },
});

class LatestTopics extends React.Component {
  constructor(props) {
    super(props);
  }

  async getLatestTopicsFromApiAsync() {
    try {
      console.log('start latestTopics request');
      let response = await fetch('https://www.v2ex.com/api/topics/latest.json');
      let json = await response.json();
      this.props.onLoad(json);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    console.log('latest component did mount');
    this.getLatestTopicsFromApiAsync();
  }

  render() {
    return (
      <Feed selectedTab="latestTopics" navigation={this.props.navigation} />
    );
  }
}

export default connect(null, mapDispatchtoProps)(LatestTopics);
