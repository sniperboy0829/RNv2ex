import React from 'react';
import Feed from './Feed';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const mapDispatchtoProps = (dispatch) => ({
  onLoad: (payload) => {
    dispatch({type: 'LatestTopics', payload: payload});
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
      await json.map((item) => {
        console.log(item.id);
      });
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
    return <Feed />;
  }
}

export default connect(null, mapDispatchtoProps)(LatestTopics);
