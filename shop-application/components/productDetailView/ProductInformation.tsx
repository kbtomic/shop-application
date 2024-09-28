import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import fontStyles from '../../styles/fonts';

interface ProductInformationProps {
    brandName: string;
    productName: string;
    price: number;
    description: string;
    selectedSize: string | null;
    onToggleDropdown: () => void;
}

const ProductInformation: React.FC<ProductInformationProps> = ({ brandName, productName, price, description, selectedSize, onToggleDropdown }) => {
    return (
        <View style={styles.informationContainer}>
            <Text style={fontStyles.mediumBlack}>{brandName}</Text>
            <Text style={fontStyles.boldMediumBlack}>{productName}</Text>
            <Text style={[fontStyles.mediumBlack, styles.price]}>{(price / 100).toFixed()}€</Text>
            <TouchableOpacity onPress={onToggleDropdown} style={styles.sizeDropdown}>
                <Text style={fontStyles.smallGrey}>{selectedSize ? selectedSize : "Choose size"}</Text>
            </TouchableOpacity>
            <Text style={fontStyles.smallGrey}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    informationContainer: {
        flex: 1,
        padding: 20,
    },
    price: {
        marginTop: 10,
        marginBottom: 10,
    },
    sizeDropdown: {
        borderWidth: 0.5,
        borderColor: COLORS.black,
        padding: 10,
        marginVertical: 10,
    },
});

export default ProductInformation;
