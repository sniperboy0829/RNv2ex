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
  latestTopics: state.latestTopics,
});

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  clickPost(postId) {
    const filted = this.props.latestTopics.filter((e) => {
      return e.id === postId;
    });
    const post = filted[0];
    this.props.navigation.navigate('Detail', {post: post});
  }

  render() {
    console.log('render feed');
    console.log(this.props.latestTopics.length);
    if (this.props.latestTopics.length === 0) {
      return <Text> Loading </Text>;
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.latestTopics}
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
