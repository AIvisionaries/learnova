import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import Slide from '../components/Slide';
import Pagination from '../components/Pagination';
import NavigationButtons from '../components/NavigationButtons';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: 1,
    title: 'Meet Learnova 🤖',
    description: 'Your personal AI tutor for interactive learning experiences',
    image: require('../assets/images/Sliders/slide1.jpg'),
  },
  {
    id: 2,
    title: 'Gamified Learning 🎮',
    description: 'Master concepts through fun, interactive challenges',
    image: require('../assets/images/Sliders/slide2.jpg'),
  },
];

const SliderScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / width);
    setActiveIndex(currentIndex);
  };

  const goNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    } else {
      // Navigate to main app screen
      navigation.replace('Home');
    }
  };

  const goPrevious = () => {
    if (activeIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
    }
  };

  const skip = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Slide slide={item} isActive={activeIndex === index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <Pagination slides={SLIDES} activeIndex={activeIndex} />
      <NavigationButtons
        activeIndex={activeIndex}
        totalSlides={SLIDES.length}
        goNext={goNext}
        goPrevious={goPrevious}
        skip={skip}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
});

export default SliderScreen;