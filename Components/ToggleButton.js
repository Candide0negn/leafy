import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Text , buttonWidth} from 'react-native';

const ToggleButton = ({ options, onToggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(toggleAnimation, {
      toValue: activeIndex,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const toggleOption = (index) => {
    setActiveIndex(index);
    onToggle(options[index].value);
  };

  const buttonWidth = 100; // Adjust this value to your desired button width
  const animatedStyles = {
    transform: [
      {
        translateX: toggleAnimation.interpolate({
          inputRange: options.map((_, index) => index),
          outputRange: options.map((_, index) => buttonWidth * index),
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, activeIndex === index ? styles.activeButton : null]}
          onPress={() => toggleOption(index)}
        >
          <Text style={[styles.buttonText, activeIndex === index ? styles.activeButtonText : null]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View style={[styles.toggleButton, animatedStyles]} />
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
    flex: 1,
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
    width: buttonWidth,
  },
});

export default ToggleButton;