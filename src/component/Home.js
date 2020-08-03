import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
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
  ...state.topTopics,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({type: 'POSTS_LOAD', payload}),
});
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  async getTopTopicsFromApiAsync() {
    try {
      let response = await fetch('https://www.v2ex.com/api/topics/hot.json');
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
    this.getTopTopicsFromApiAsync();
  }

  clickPost(postId) {
    const filted = this.props.posts.filter((e) => {
      return e.id === postId;
    });
    const post = filted[0];
    this.props.navigation.navigate('Detail', {post: post});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.posts}
          renderItem={({item}) => (
            <Post post={item} onClick={this.clickPost.bind(this)} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
