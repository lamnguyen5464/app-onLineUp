import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TextSize } from '@utils/Constants';
import Colors from '@utils/Colors';

const CustomizedText = ({ type = null, textStyle = {}, children, size = null }) => {
    size = typeof size === 'number' ? size : TextSize[size];

    const appliedType = styles[type] || {};
    const appliedSize = !size ? {} : { fontSize: size };

    return <Text style={[appliedType, appliedSize, textStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: TextSize.H3,
        color: Colors.white,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: TextSize.Title,
        color: Colors.white,
    },
    title_dark: {
        fontSize: TextSize.H3,
        color: Colors.black_15,
        fontWeight: 'bold',
    },
    subtitle_dark: {
        fontSize: TextSize.Title,
        color: Colors.black_15,
    },
    primary: {
        fontSize: TextSize.H4,
        color: Colors.white,
        fontWeight: 'bold',
    },
    secondary: {
        fontSize: TextSize.H4,
        color: Colors.blue_fund_2,
        fontWeight: 'bold',
    },
});

export default React.memo(CustomizedText);
