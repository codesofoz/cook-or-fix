import { useState } from 'react';
import { View } from 'react-native';
import { InputField } from './InputField';
import { Button } from './Button';

export function RecipeInputForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = () => {
    console.log('Recipe Submitted:', { title, ingredients, instructions });
    // Add logic to save or send the recipe
  };

  return (
    <View className="p-4">
      <InputField
        label="Recipe Title"
        placeholder="Enter recipe title"
        value={title}
        onChangeText={setTitle}
      />
      <InputField
        label="Ingredients"
        placeholder="List ingredients"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <InputField
        label="Instructions"
        placeholder="Enter instructions"
        value={instructions}
        onChangeText={setInstructions}
      />
      <Button onPress={handleSubmit}>Submit Recipe</Button>
    </View>
  );
}
