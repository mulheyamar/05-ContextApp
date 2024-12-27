import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';

export const HomeScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>HomeScreen</Text>
    </View>
  );
};