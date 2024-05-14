import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  
  const [timeoutId, setTimeoutId] = useState(null);
  const [display, setDisplay] = useState('');
  const [timer, setTimer] = useState(10);

  const startTimer = () => {
    const id = setTimeout(() => {
      setDisplay("Timeout done");
    }, 5000);
    setTimeoutId(id);

    const countDown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          clearInterval(countDown);
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout when unmounting
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{display}</Text>
      <Text>{timer}</Text>
      <Button title="Stop Timeout" onPress={stopTimer} />
      <Button title='stop countdown'/>
    </View>
  );
}
