import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import fontStyles from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

type HeaderProps = {
    greeting: string;
    onPressFilter: () => void;
};

const Header: React.FC<HeaderProps> = ({ greeting, onPressFilter }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={fontStyles.largeBlack}>{greeting}</Text>
            <TouchableOpacity onPress={onPressFilter}>
                <Text style={styles.filterButtonText}>Filter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        elevation: 1,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        zIndex: 1,
    },
    filterButtonText: {
        color: COLORS.purple,
    }
});

export default Header;
