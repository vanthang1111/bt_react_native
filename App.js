import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from './Styles';
import Square from './Square'; 
export default function App() {
  return (
    <View style={styles.container}>
      <Square number='1' color="#6CD1FA"/>
      <Square number='2' color="#78F57A"/>
      <Square number='3' color="#FA4C8F"/>
    </View>
  );
}