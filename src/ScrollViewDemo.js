import React from 'react';
import {View, ScrollView, Text} from 'react-native';

export default () => {
  const buildListView = () => {
    const array = [];
    for (let i = 0; i < 29; i++) {
      array.push(<Text key={`item-${i}}`}>{i}</Text>);
    }
    return array;
  };

  return <ScrollView>{buildListView()}</ScrollView>;
};
