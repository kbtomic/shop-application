import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { ProductDetailViewProps } from '../types/Navigation';
import CustomButton from '../components/shared/CustomButton';
import { COLORS } from '../styles/colors';
import fontStyles from '../styles/fonts';
import ProductImagesGallery from '../components/productDetailView/ProductImagesGallery';
import ProductSizeDropdown from '../components/productDetailView/ProductSizeDropdown';
import ProductInformation from '../components/productDetailView/ProductInformation';

const ProductDetailView: React.FC<ProductDetailViewProps> = ({navigation, route}) => {
    const product = route.params.product;
    const { height } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({ title: product.name, headerTitleStyle: fontStyles.mediumBlack, headerBackTitleVisible: false, });
    }, [navigation, product.name]);
    
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const selectSize = (size: string) => {
        setSelectedSize(size);
        setDropdownVisible(false);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            console.log(`Adding to cart: ${product.name}, size: ${selectedSize}`);
        } else {
            setDropdownVisible(true);
        }
    };

    return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProductImagesGallery images={[product.mainImageUrl, ...product.additionalImages]} />     
            <ProductInformation
                        brandName={product.brandName}
                        productName={product.name}
                        price={product.price}
                        description={product.description}
                        selectedSize={selectedSize}
                        onToggleDropdown={toggleDropdown}
            />
        </ScrollView>
        <ProductSizeDropdown
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={selectSize}
            onClose={closeDropdown}
            isVisible={isDropdownVisible}
            height={height}
        />
        {!isDropdownVisible && (
            <View style={styles.footer}>
                <CustomButton
                    onPress={handleAddToCart}
                    buttonText="Add to cart"
                />
            </View>
        )}
    </View>
    );
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        zIndex: 10,
    },
    scrollContainer: {
        paddingHorizontal: 0,
        paddingBottom: 70,
    },
});

export default ProductDetailView;