import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';
import fontStyles from '../styles/fonts';

type CustomButtonProps = {
    onPress: () => void;
    buttonText: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, buttonText }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={fontStyles.bold16White}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.purple,
        padding: 15,
        alignItems: 'center',
    },
});

export default CustomButton;
