import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore( (state) => state.count );
  const increment = useCounterStore( (state) => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${ count }`,
    })
  }, [count]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: { count }</Text>
      <Pressable
        onPress={() => increment(1)}
      style={styles.primarybutton}>
        <Text >+1</Text>
      </Pressable>
      <Pressable 
      onPress={() => increment(-1)}
      style={styles.primarybutton}>
        <Text>-1</Text>
      </Pressable>

    </View>
  );
};