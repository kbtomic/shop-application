import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Product } from '../types/Product';

interface ProductItemProps {
  product: Product;
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  const {height, width} = useWindowDimensions();
  const containerHeight = height * 0.4;
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { height: containerHeight }]}>
      <Image source={{ uri: product.mainImageUrl }} style={[styles.image, { height: containerHeight * 0.6 }]}/>
      <View style={styles.details}>
        <Text style={styles.brandName} numberOfLines={1}>{product.brandName}</Text>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price}>€{(product.price / 100).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: '#fff',
    overflow: 'hidden',
    margin: 10,
    
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#ddd', // Add this for the border color
  },
  details: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  brandName: {
    fontSize: 12,
    color: '#666',
  },
  productName: {
    fontSize: 12,
    color: '#333',
  },
  price: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
}
);

export default ProductItem;
