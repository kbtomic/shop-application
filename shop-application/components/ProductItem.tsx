import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Product } from '../types/Product';
import fontStyles from '../styles/fonts';
import { COLORS } from '../styles/colors';

interface ProductItemProps {
  product: Product;
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  const { height } = useWindowDimensions();
  const containerHeight = height * 0.4;
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { height: containerHeight }]}>
      <Image source={{ uri: product.mainImageUrl }} style={[styles.image, { height: containerHeight * 0.7 }]}/>
      <View style={styles.details}>
        <Text style={fontStyles.smallBlack} numberOfLines={1}>{product.brandName}</Text>
        <Text style={fontStyles.mediumGrey} numberOfLines={1}>{product.name}</Text>
        <Text style={[styles.price, fontStyles.mediumBlack]}>€{(product.price / 100).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    borderWidth: 0.2,
    borderColor: COLORS.lightGrey,
  },
  details: {
    paddingTop: 5,
  },
  price: {
    paddingTop: 10,
  },
}
);

export default ProductItem;
