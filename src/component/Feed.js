import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Post} from './Post';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = (state) => ({
  hotTopics: state.topTopics,
  latestTopics: state.latestTopics,
});

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  clickPost(postId) {
    const filted = this.buildTopics().filter((e) => {
      return e.id === postId;
    });
    const post = filted[0];
    this.props.navigation.navigate('Detail', {title: post.title, post: post});
  }

  buildTopics() {
    let topics = [];
    if (this.props.selectedTab === 'hotTopics') {
      topics = this.props.hotTopics;
    } else {
      topics = this.props.latestTopics;
    }
    return topics;
  }

  render() {
    let topics = this.buildTopics();
    console.log('render feed: ' + this.props.selectedTab);
    if (topics.length === 0) {
      return <Text> Loading </Text>;
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={topics}
            renderItem={({item}) => (
              <Post post={item} onClick={this.clickPost.bind(this)} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
  }
}

export default connect(mapStateToProps)(Feed);
