import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { COLORS } from '../../styles/colors';
import fontStyles from '../../styles/fonts';
import { groupBrandsByLetter } from '../../utils/GroupBrandsByLetter';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  onSelectBrand: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ brands, selectedBrands, onSelectBrand }) => {
    const sections = groupBrandsByLetter(brands);

    return (
        <View style={styles.container}>
        <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.brandButton} onPress={() => onSelectBrand(item)}>
                <Text style={selectedBrands.includes(item) ? styles.selectedBrandText : {}}>{item}</Text>
            </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
                <Text style={fontStyles.mediumBlack}>{title}</Text>
            </View>
            )}
            contentContainerStyle={styles.listContent}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    brandButton: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    container: {
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    listContent: {
        paddingBottom: 10,
    },
    selectedBrandText: {
        fontWeight: 'bold',
    },
});

export default BrandFilter;
