import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { COLORS } from '../../styles/colors';
import fontStyles from '../../styles/fonts';

interface ProductSizeDropdownProps {
  sizes: { id: string; name: string }[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
  onClose: () => void;
  isVisible: boolean;
  height: number;
}

const ProductSizeDropdown: React.FC<ProductSizeDropdownProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  onClose,
  isVisible,
  height
}) => {
    return (
        <>
            {isVisible && (
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}
            {isVisible && (
                <View style={[styles.dropdownContainer, { maxHeight: 0.4 * height }]}>
                    <Text style={[styles.sizeHeader, fontStyles.mediumBlack]}>Size</Text>
                    <ScrollView>
                        <FlashList
                            data={sizes}
                            keyExtractor={(size) => size.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => onSelectSize(item.name)} style={styles.sizeItem}>
                                    <Text style={fontStyles.smallBlack}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            estimatedItemSize={30}
                        />
                    </ScrollView>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
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
  overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default ProductSizeDropdown;
