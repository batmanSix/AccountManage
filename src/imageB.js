import React, {useRef} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import avatar from './assets/WechatIMG923.jpeg';
const ImageBackDemo = () => {
  const viewref = useRef(null);

  const imgref = useRef(null);
  return (
    <View style={styles.root}>
      <ImageBackground
        imageRef={imgref}
        ref={viewref}
        source={avatar}
        style={styles.viewStyle}
        imageStyle={styles.imageStyle}>
        <Text>2131</Text>
        <Text>2131</Text>

        <Text>2131</Text>
        <Text>2131</Text>
        <Text>2131</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewStyle: {
    width: 300,
    height: 120,
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImageBackDemo;
