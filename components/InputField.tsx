import { Text, TextInput, View } from 'react-native';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  className?: string;
  inputClassName?: string;
}

export function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  multiline = false,
  className,
  inputClassName,
}: InputFieldProps) {
  return (
    <View className={cn('mb-4', className)}>
      {label && <Text className="text-base font-semibold text-gray-700 mb-1">{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        className={cn(
          'px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 text-base border border-gray-300 dark:border-zinc-600 text-gray-800 dark:text-white',
          inputClassName
        )}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
}
