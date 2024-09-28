import React from 'react';
import { View, Image, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';

interface ProductImagesGalleryProps {
  images: string[];
}

const ProductImagesGallery: React.FC<ProductImagesGalleryProps> = ({ images }) => {
  const { height, width } = useWindowDimensions();
  const imageHeight = height * 0.4;

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      decelerationRate="fast"
      style={{ width }}
    >
      {images.map((image, index) => (
        <View key={index} style={[styles.imageWrapper, { width: width }]}>
          <Image
            source={{ uri: image }}
            style={[styles.image, { width: width, height: imageHeight }]}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default ProductImagesGallery;
