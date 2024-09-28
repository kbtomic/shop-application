import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontStyles from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

type ActiveFiltersProps = {
    selectedBrands: string[];
    selectedSizes: string[];
};

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ selectedBrands, selectedSizes }) => {
    return (
        <View style={styles.activeFiltersContainer}>
            {selectedBrands.length > 0 && (
                <View style={styles.filterBox}>
                    <Text style={fontStyles.smallBlack}>Brand ({selectedBrands.length})</Text>
                </View>
            )}
            {selectedSizes.length > 0 && (
                <View style={styles.filterBox}>
                    <Text style={fontStyles.smallBlack}>Size ({selectedSizes.length})</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    activeFiltersContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    filterBox: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderWidth: 0.5,
        borderColor: COLORS.lightGrey,
        alignItems: 'center',
    }
});

export default ActiveFilters;
