import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';

const TextInputS = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="请输入"
        autoFocus={true}
        defaultValue="默认内容"
        blurOnSubmit={false}
        caretHidden={false}
        keyboardType="numbers-and-punctuation"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  input: {
    width: '100%',
    height: 56,
    fontSize: 30,
    backgroundColor: '#d0d0d0',
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default TextInputS;
