import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../styles/colors';

interface SizeFilterProps {
  sizes: string[];
  selectedSizes: string[];
  onSelectSize: (size: string) => void;
}

const SizeFilter: React.FC<SizeFilterProps> = ({ sizes, selectedSizes, onSelectSize }) => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sizes.map(size => (
            <TouchableOpacity
            key={size}
            style={[styles.sizeButton, selectedSizes.includes(size) && styles.selectedSizeButton]}
            onPress={() => onSelectSize(size)}
            >
            <Text>{size}</Text>
            </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
    },
    sizeButton: {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 0.5,
        borderColor: COLORS.lightGrey,
    },
    selectedSizeButton: {
        borderWidth: 1,
        borderColor: COLORS.black,
    },
});

export default SizeFilter;
