import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
const TextInputField = (props) => {

    const {
        placeHolderText,
        placeHolderTextColor,
        password,
        width
    } = props
    return (
        <View style={[styles.inputView,]}>
            <TextInput
                {...props}
                style={[styles.textInputStyle,]}
                secureTextEntry={password ? password : null}
                placeholder={placeHolderText}
                placeholderTextColor={placeHolderTextColor}
            />
        </View>
    )
}

export default TextInputField