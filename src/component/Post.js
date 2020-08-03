import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#009999',
    borderRadius: 5,
  },
  item: {
    margin: 20,
    fontSize: 20,
  },
});

export function Post({post, onClick}) {
  return (
    <View style={styles.container}>
      <Text style={styles.item} onPress={() => onClick(post.id)}>
        {post.title}
      </Text>
    </View>
  );
}
