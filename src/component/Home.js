import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Post} from './Post';
import {connect} from 'react-redux';
import TopTopics from './TopTopics';
import LatestTopics from './LatestTopics';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableTabView>
        <TopTopics tabLabel="TopTopics" navigation={this.props.navigation} />
        <LatestTopics
          tabLabel="LatestTopics"
          navigation={this.props.navigation}
        />
      </ScrollableTabView>
    );
  }
}

export default connect()(Home);
