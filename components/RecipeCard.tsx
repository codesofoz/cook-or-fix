import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  image: string;
  onPress: () => void;
}

const RecipeCard: React.FC<Props> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    height: 150,
    width: '100%',
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipeCard;
