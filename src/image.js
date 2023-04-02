import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import avatar from './assets/WechatIMG923.jpeg'; // 本地图片

// blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜。 模糊
// defaultSource 站位图片
const ImageDemo = () => {
  const imagref = useRef(null);
  useEffect(() => {
    // Image.getSize('xxx.xx.jgp', (width, height) => {
    //   console.log(`图片款高:${width},${height}`);
    // }),
    //   error => {
    //     console.log(error);
    //   };
    // 图片预先加载
    Image.prefetch('xx.xx.jpg')
      .then(data => {
        console.log(data, 'success');
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <View style={styles.root}>
      <Image
        ref={imagref}
        style={styles.img}
        defaultSource={avatar}
        source={avatar}
        blurRadius={5}
        onLoad={event => {
          console.log(event.nativeEvent, 'onload');
        }}
        onError={() => {
          console.log('onload error');
        }}
        onLoadStart={() => {
          console.log('onLoadStart');
        }}
        onLoadEnd={() => {
          setTimeout(() => {
            console.log('加载完成');
          }, 3000);
        }}
        fadeDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 200,
    backgroundColor: '#f5f',
  },
  img: {
    width: 160,
    height: 120,
    resizeMode: 'cover',
    // tintColor: '', // 着色
    backgroundColor: '#a0a0a0',
  },
});

export default ImageDemo;
