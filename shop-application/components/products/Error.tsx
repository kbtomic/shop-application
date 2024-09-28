import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontStyles from '../../styles/fonts';

type ErrorComponentProps = {
    message: string;
};

const Error: React.FC<ErrorComponentProps> = ({ message }) => {
    return (
        <View style={styles.errorContainer}>
            <Text style={fontStyles.boldLargeBlack}>Sorry: {message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

export default Error;
