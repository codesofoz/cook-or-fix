// components/TimerWidget.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  initialSeconds: number;
}

const TimerWidget: React.FC<Props> = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{secondsLeft}s</Text>
      <Button title={isRunning ? "Pause" : "Start"} onPress={() => setIsRunning(prev => !prev)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timer: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TimerWidget;
