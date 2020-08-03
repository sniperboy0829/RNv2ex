import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  ...state.TopTopics,
});

class Detail extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  componentDidMount() {
    console.log('detail componentDidMount');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.content}>
          {this.props.route.params.post.content}
        </Text>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Detail);
