import React, { useEffect, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import axios from 'axios';
import { Product } from '../types/Product';
import { ProductsProps } from '../types/Navigation';
import { COLORS } from '../styles/colors';
import Header from '../components/products/Header';
import LoadingIndicator from '../components/products/LoadingIndicator';
import Error from '../components/products/Error';
import ActiveFilters from '../components/products/ActiveFilters';
import apiConfig from '../apiConfig';
import FilterModal from '../components/products/FilterModal';
import ProductList from '../components/products/ProductList';
import NoProducts from '../components/products/NoProducts';

type Props = {
    navigation: ProductsProps;
};

const Products: React.FC<Props> = ({ navigation }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [filterModalVisible, setFilterModalVisible] = useState(false);

    useEffect(() => {
    // Fetch products from the JSON server
        axios.get(apiConfig.PRODUCTS_URL, { timeout: 7000 })
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
    const uniqueSizes = Array.from(new Set(products.flatMap(product => product.sizes.map(size => size.name))));

    // Filter products based on selected brand and sizes
    const filteredProducts = products.filter(product => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brandName);
        const matchesSize = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size.name));
        return matchesBrand && matchesSize;
    });

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <Error message={error} />;
    }

  return (
    <View style={styles.container}>
        <Header 
                onPressFilter={() => setFilterModalVisible(true)} 
                greeting="Hello, user!"
        />
        <ActiveFilters 
                selectedBrands={selectedBrands} 
                selectedSizes={selectedSizes} 
        />
        <FilterModal
                visible={filterModalVisible}
                onRequestClose={() => setFilterModalVisible(false)}
                brandNames={brandNames}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                uniqueSizes={uniqueSizes}
                selectedSizes={selectedSizes}
                setSelectedSizes={setSelectedSizes}
            />
        {filteredProducts.length === 0 ? (
            <NoProducts />
        ) : (
            <ProductList products={filteredProducts} navigation={navigation} />
            )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

export default Products;