import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import { FlashList } from '@shopify/flash-list';
import ProductItem from '../components/ProductItem';
import { Product } from '../types/Product';
import { ProductsProps } from '../types/Navigation';
import BrandFilter from '../components/BrandFilter';

type Props = {
    navigation: ProductsProps;
  };

const Products: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products from the JSON server
    axios.get('http://192.168.0.19:3000/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Get unique brand names for the BrandFilter
  const brandNames = Array.from(new Set(products.map((product) => product.brandName)));

  // Filter products based on selected brand
  const filteredProducts = selectedBrand
    ? products.filter((product) => product.brandName === selectedBrand)
    : products;

  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductItem
      product={item}
      onPress={() => navigation.navigate('ProductDetailView', { product: item })}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <BrandFilter
        brands={brandNames}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
      />
      <FlashList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.productId}
        contentContainerStyle={styles.list}
        estimatedItemSize={1580}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default Products;