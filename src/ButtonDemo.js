// button 组件
import React from 'react';
import {Button, View} from 'react-native';

export default () => {
  return (
    <View>
      <Button
        color={'green'}
        onPress={() => {
          console.log('按钮');
        }}
        disabled={false}
        title="按钮"
      />
    </View>
  );
};
