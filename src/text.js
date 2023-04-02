import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// text 组件练习
// fontsize 字体大小
// fontWeight 字重量
// numberOfLines 指定行数
// ellipsizeMode 省略模式
// selectionColor iOS不生效
// onpress 长按
// allowFontScaling 跟随字体大小
// textAlignVertical 只在安卓生效
const TextComp = () => {
  return (
    <View style={styles.root}>
      <Text
        style={styles.text}
        numberOfLines={1}
        selectable={true}
        onPress={() => {
          console.log('onpress 点击事件');
        }}
        allowFontScaling={true}
        onLongPress={() => {
          console.log('onlongpress长按事件');
        }}
        selectionColor="red">
        text组件练习
      </Text>
    </View>
  );
};

// 可以在ios 或者安卓中引入自定义字体文件
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 100,
    backgroundColor: '#f0f0f0',
  },
  text: {
    width: 300,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    backgroundColor: '#c0c0c0',
    textShadowColor: '#a0a0a0',
    textShadowOffset: {width: 1, height: 4},
    textShadowRadius: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default TextComp;
