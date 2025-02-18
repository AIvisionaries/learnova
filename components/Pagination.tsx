import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationProps {
  slides: any[];
  activeIndex: number;
}

const Pagination = ({ slides, activeIndex }: PaginationProps) => {
  return (
    <View style={styles.container}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4A90E2',
    transform: [{ scale: 1.2 }],
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
});

export default Pagination;