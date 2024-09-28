export const FONT_SIZES = {
    extraSmall: 10,
    small: 12,
    medium: 14,
    large: 16,
};

export const FONT_WEIGHTS = {
    regular: '400' as 'normal' | '400',
    bold: '700' as 'bold' | '700',
};

import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from './colors';

export const createFontStyle = (
    fontSize: number,
    color: string,
    fontWeight: TextStyle['fontWeight'] = FONT_WEIGHTS.regular
) => {
    return {
        fontSize,
        color,
        fontWeight,
    };
};

export default StyleSheet.create({
    smallBlack: createFontStyle(FONT_SIZES.small, COLORS.black),
    extraSmallBlack: createFontStyle(FONT_SIZES.extraSmall, COLORS.black),
    mediumBlack: createFontStyle(FONT_SIZES.medium, COLORS.black),
    largeBlack: createFontStyle(FONT_SIZES.large, COLORS.black),

    smallGrey: createFontStyle(FONT_SIZES.small, COLORS.lightGrey),
    extraSmallGrey: createFontStyle(FONT_SIZES.extraSmall, COLORS.lightGrey),
    mediumGrey: createFontStyle(FONT_SIZES.medium, COLORS.lightGrey),
    largeGrey: createFontStyle(FONT_SIZES.large, COLORS.lightGrey),

    boldMediumBlack: createFontStyle(FONT_SIZES.medium, COLORS.black, FONT_WEIGHTS.bold),
    boldLargeBlack: createFontStyle(FONT_SIZES.large, COLORS.black, FONT_WEIGHTS.bold),

    boldMediumWhite: createFontStyle(FONT_SIZES.medium, COLORS.white, FONT_WEIGHTS.bold),
    boldLargeWhite: createFontStyle(FONT_SIZES.large, COLORS.white, FONT_WEIGHTS.bold),
});
