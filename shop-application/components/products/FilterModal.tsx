import React from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView } from 'react-native';
import BrandFilter from '../../components/products/BrandFilter';
import SizeFilter from '../../components/products/SizeFilter';
import CustomButton from '../../components/shared/CustomButton';
import fontStyles from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

type FilterModalProps = {
    visible: boolean;
    onRequestClose: () => void;
    brandNames: string[];
    selectedBrands: string[];
    setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
    uniqueSizes: string[];
    selectedSizes: string[];
    setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterModal: React.FC<FilterModalProps> = ({
    visible,
    onRequestClose,
    brandNames,
    selectedBrands,
    setSelectedBrands,
    uniqueSizes,
    selectedSizes,
    setSelectedSizes,
}) => (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onRequestClose}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.modalContainer}>
                <Text style={[styles.modalTitle, fontStyles.smallBlack]}>Filters</Text>
                <Text style={[styles.filterLabel, fontStyles.boldMediumBlack]}>Choose brand</Text>
                <BrandFilter
                    brands={brandNames}
                    selectedBrands={selectedBrands}
                    onSelectBrand={(brand) => {
                        setSelectedBrands((prevSelected) =>
                            prevSelected.includes(brand)
                                ? prevSelected.filter((selectedBrand) => selectedBrand !== brand)
                                : [...prevSelected, brand]
                        );
                    }}
                />
                <Text style={[styles.filterLabel, fontStyles.boldMediumBlack]}>Choose size</Text>
                <SizeFilter
                    sizes={uniqueSizes}
                    selectedSizes={selectedSizes}
                    onSelectSize={(size) => {
                        setSelectedSizes((prevSelected) =>
                            prevSelected.includes(size)
                                ? prevSelected.filter((selectedSize) => selectedSize !== size)
                                : [...prevSelected, size]
                        );
                    }}
                />
                <CustomButton buttonText="Apply filters" onPress={onRequestClose} />
            </View>
        </SafeAreaView>
    </Modal>
);

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    modalTitle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: COLORS.lightGrey,
    },
    filterLabel: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

export default FilterModal;
