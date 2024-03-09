import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ToggleButton = ({ options, onToggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAnimation = new Animated.Value(0);

  const toggleOption = (index) => {
    Animated.timing(toggleAnimation, {
      toValue: index,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setActiveIndex(index);
    onToggle(options[index].value);
  };

  const animatedStyles = {
    transform: [
      {
        translateX: toggleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, buttonWidth * (options.length - 1)],
        }),
      },
    ],
  };

  const buttonWidth = 100; // Adjust this value to your desired button width

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.label}
          style={[styles.button, index === activeIndex && styles.activeButton]}
          onPress={() => toggleOption(index)}
        >
          <Animated.View
            style={[
              styles.toggleButton,
              animatedStyles,
              { width: buttonWidth },
            ]}
          />
          <Animated.Text
            style={[
              styles.buttonText,
              index === activeIndex && styles.activeButtonText,
            ]}
          >
            {option.label}
          </Animated.Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#6FCF97',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  activeButtonText: {
    color: '#FFFFFF',
  },
  toggleButton: {
    position: 'absolute',
    backgroundColor: '#6FCF97',
    height: '100%',
    borderRadius: 16,
  },
});

export default ToggleButton;