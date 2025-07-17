import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  stepNumber: number;
  instruction: string;
}

const StepCard: React.FC<Props> = ({ stepNumber, instruction }) => (
  <View style={styles.card}>
    <Text style={styles.step}>Step {stepNumber}</Text>
    <Text style={styles.instruction}>{instruction}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  step: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  instruction: {
    fontSize: 16,
  },
});

export default StepCard;
