import React from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface SlideProps {
  slide: {
    id: number;
    title: string;
    description: string;
    image: any;
  };
  isActive: boolean;
}

const Slide = ({ slide, isActive }: SlideProps) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    if (isActive) {
      Animated.parallel([
        Animated.spring(fadeAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
    }
  }, [isActive]);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { 
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }] 
        }
      ]}
    >
      <Image source={slide.image} style={styles.image} />
      <Text style={styles.title}>{slide.title}</Text>
      <Text style={styles.description}>{slide.description}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2D4356',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 30,
    fontFamily: 'Inter_400Regular',
  },
});

export default Slide;