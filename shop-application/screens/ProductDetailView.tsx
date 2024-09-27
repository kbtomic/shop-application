import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ProductDetailViewProps } from '../types/Navigation';

const ProductDetailView: React.FC<ProductDetailViewProps> = ({navigation, route}) => {
    console.log(route.params.product);
    const product = route.params.product;
  return (
    <View style={styles.container}>
    <Image source={{ uri: product.mainImageUrl }} style={styles.image}/>
    {product.additionalImages.map((image) => (
        <Image key={image} source={{ uri: image }} style={styles.additionalImage}/>
    ))}
    <View style={styles.informationContainer}>
      <Text>{product.brandName}</Text>
      <Text>{product.name}</Text>
      <Text>{(product.price / 100).toFixed()}€</Text>
      {product.sizes.map((size) => (
        <Text key={size.id}>{size.name}</Text>
     ))}
     <Text>{product.description}</Text>
    </View>
    </View>
  );
};

const styles= StyleSheet.create({
    additionalImage: {
        height: 100,
        width: 100,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
    },
    informationContainer: {
        flex: 1,
    }
});

export default ProductDetailView;