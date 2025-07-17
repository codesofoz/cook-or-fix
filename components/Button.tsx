import { Pressable, Text } from 'react-native';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  className?: string;
};

export const Button = ({ children, onPress, className }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={cn('bg-blue-500 p-4 rounded-xl', className)}
    >
      <Text className="text-white text-center font-semibold">{children}</Text>
    </Pressable>
  );
};
