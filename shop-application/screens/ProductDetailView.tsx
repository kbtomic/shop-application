import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import { ProductDetailViewProps } from '../types/Navigation';
import { FlashList } from '@shopify/flash-list';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../styles/colors';
import fontStyles from '../styles/fonts';

const ProductDetailView: React.FC<ProductDetailViewProps> = ({navigation, route}) => {
    const product = route.params.product;
    const { height, width } = useWindowDimensions();
    const imageHeight = height * 0.4;
    const allImages = [product.mainImageUrl, ...product.additionalImages];

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

             {/* Horizontal ScrollView for Product Images */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                style={{ width }}
            >
                {allImages.map((image, index) => (
                    <View key={index} style={[styles.imageWrapper, { width: width }]}>
                        <Image
                            source={{ uri: image }}
                            style={[styles.image, { width: width, height: imageHeight }]}
                        />
                    </View>
                ))}
            </ScrollView>
                
            <View style={styles.informationContainer}>
                <Text style={fontStyles.mediumBlack}>{product.brandName}</Text>
                <Text style={fontStyles.boldMediumBlack}>{product.name}</Text>
                <Text style={[fontStyles.mediumBlack, styles.price]}>{(product.price / 100).toFixed()}€</Text>

                {/* Dropdown for selecting size */}
                <TouchableOpacity onPress={toggleDropdown} style={styles.sizeDropdown}>
                    <Text style={fontStyles.smallGrey}>
                        {selectedSize ? selectedSize : "Choose size"}
                    </Text>
                </TouchableOpacity>
                    <Text style={fontStyles.smallGrey}>{product.description}</Text>
            </View>
        </ScrollView>

        {/* Overlay for darkening background when dropdown is visible */}
        {isDropdownVisible && (
            <TouchableWithoutFeedback onPress={closeDropdown}>
                <View style={styles.overlay} />
            </TouchableWithoutFeedback>
        )}

        {isDropdownVisible && (
            <View style={[styles.dropdownContainer, { maxHeight: 0.4 * height }]}>
                <Text style={[styles.sizeHeader, fontStyles.mediumBlack]}>Size</Text>
                <ScrollView>
                    <FlashList
                        data={product.sizes}
                        keyExtractor={(size) => size.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => selectSize(item.name)} style={styles.sizeItem}>
                                <Text style={fontStyles.smallBlack}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        estimatedItemSize={30}
                    />
                </ScrollView>
            </View>
        )}

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
    dropdownContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderColor: COLORS.lightGrey,
        zIndex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        zIndex: 10,
    },
    image: {
        resizeMode: 'contain',
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationContainer: {
        flex: 1,
        padding: 20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    price: {
        marginTop: 10,
        marginBottom: 10,
    },
    scrollContainer: {
        paddingHorizontal: 0,
        paddingBottom: 70,
    },
    sizeDropdown: {
        borderWidth: 0.5,
        borderColor: COLORS.black,
        padding: 10,
        marginVertical: 10,
    },
    sizeHeader: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey,
    },
    sizeItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey,
    },
});

export default ProductDetailView;