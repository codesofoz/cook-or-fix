import { View, Text } from 'react-native';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

type HeaderProps = {
  title: string;
  showBack?: boolean;
};

export default function Header({ title, showBack = false }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white shadow-sm">
      {showBack ? (
        <Pressable onPress={() => navigation.goBack()} className="p-2">
          <ArrowLeft size={24} color="#333" />
        </Pressable>
      ) : (
        <View className="w-8" />
      )}
      <Text className="text-lg font-semibold text-gray-900">{title}</Text>
      <View className="w-8" />
    </View>
  );
}
