import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#009999',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 20,
  },
  signature: {
    fontSize: 14,
    marginTop: 10,
  },
  avtar: {
    width: 70,
    height: 70,
  },
});

export function Post({post, onClick}) {
  const avatarURL = post.member.avatar_mini;
  let actuallyAvatarURL = avatarURL;
  const indexAvatarURL = avatarURL.indexOf('?m=');
  if (indexAvatarURL !== -1) {
    actuallyAvatarURL = avatarURL.substring(0, indexAvatarURL);
  }
  let signature = post.member.username + '    5分钟前';
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick(post.id)}>
      <Image style={styles.avtar} source={{uri: actuallyAvatarURL}} />
      <View style={styles.content}>
        <Text style={styles.item}>{post.title}</Text>
        <Text style={styles.signature}>{signature}</Text>
      </View>
    </TouchableOpacity>
  );
}
