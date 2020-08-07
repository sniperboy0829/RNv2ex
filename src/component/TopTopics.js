import React from 'react';
import {connect} from 'react-redux';
import Feed from './Feed';
import {HOT_TOPICS_LOADED} from '../Actions/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({type: HOT_TOPICS_LOADED, payload}),
});

class TopTopics extends React.Component {
  constructor(props) {
    super(props);
  }

  async getTopTopicsFromApiAsync() {
    try {
      let response = await fetch('https://www.v2ex.com/api/topics/hot.json');
      let json = await response.json();
      this.props.onLoad(json);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getTopTopicsFromApiAsync();
  }

  render() {
    return <Feed selectedTab="hotTopics" navigation={this.props.navigation} />;
  }
}

export default connect(null, mapDispatchToProps)(TopTopics);
