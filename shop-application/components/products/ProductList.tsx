import React from 'react';
import { FlashList } from '@shopify/flash-list';
import ProductItem from '../../components/products/ProductItem';
import { Product } from '../../types/Product';

type ProductListProps = {
    products: Product[];
    navigation: any; // adjust the type according to your navigation prop
};

const ProductList: React.FC<ProductListProps> = ({ products, navigation }) => {
    const renderProductItem = ({ item }: { item: Product }) => (
        <ProductItem
            product={item}
            onPress={() => navigation.navigate('ProductDetailView', { product: item })}
        />
    );

    return (
        <FlashList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.productId}
            estimatedItemSize={1580}
            numColumns={2}
        />
    );
};

export default ProductList;
