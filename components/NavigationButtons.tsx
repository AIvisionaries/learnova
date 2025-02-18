import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface NavigationButtonsProps {
  activeIndex: number;
  totalSlides: number;
  goNext: () => void;
  goPrevious: () => void;
  skip: () => void;
}

const NavigationButtons = ({
  activeIndex,
  totalSlides,
  goNext,
  goPrevious,
  skip,
}: NavigationButtonsProps) => {
  return (
    <View style={styles.container}>
      {activeIndex > 0 && (
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={goPrevious}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      
      <View style={styles.spacer} />

      {activeIndex < totalSlides - 1 ? (
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={skip}
        >
          <Text style={styles.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={goNext}
      >
        <Text style={styles.primaryButtonText}>
          {activeIndex === totalSlides - 1 ? 'Start Learning' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
    minWidth: 150,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#F0F0F0',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
  },
  secondaryButtonText: {
    color: '#2D4356',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
  spacer: {
    flex: 1,
  },
});

export default NavigationButtons;