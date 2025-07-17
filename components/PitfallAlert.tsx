// components/PitfallAlert.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  message: string;
}

const PitfallAlert: React.FC<Props> = ({ message }) => (
  <View style={styles.alert}>
    <Text style={styles.text}>⚠️ {message}</Text>
  </View>
);

const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#ffe5e5',
    padding: 10,
    borderRadius: 6,
    margin: 10,
  },
  text: {
    color: '#c00',
    fontWeight: '600',
  },
});

export default PitfallAlert;
