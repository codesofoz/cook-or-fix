import { Text, TouchableOpacity } from 'react-native';

export default function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-indigo-600 py-3 px-6 rounded-lg shadow-lg"
    >
      <Text className="text-white font-semibold text-center">{label}</Text>
    </TouchableOpacity>
  );
}
