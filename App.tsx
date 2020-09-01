import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const emptyString = "";
const placeHolder = "...?";
const duration = 2000
const useNativeDriver = true;


export default function App() {
  const [value, setValue] = React.useState(emptyString)
  const iconName = value ? "angry" : "smile"

  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    setValue(emptyString);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver
    }).start();
  };


  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration,
      useNativeDriver
    }).start(fadeIn);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View
          style={[
            {
              opacity: fadeAnim
            }
          ]}
        >
          <TextInput
            value={value}
            placeholder={placeHolder}
            style={styles.input}
            onChangeText={setValue}
            multiline
          />
        <FontAwesome5.Button name={iconName} onPress={fadeOut} style={styles.submit}/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    padding: 6,
    marginBottom: 10,
    backgroundColor: '#ecf0f1'
  },
  submit: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
