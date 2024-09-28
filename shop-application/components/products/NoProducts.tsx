import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontStyles from '../../styles/fonts';

const NoProductsMessage: React.FC = () => (
    <View style={styles.container}>
        <Text style={[styles.text, fontStyles.mediumGrey]}>No products found that match your filters!</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        textAlign: 'center',
    },
});

export default NoProductsMessage;
