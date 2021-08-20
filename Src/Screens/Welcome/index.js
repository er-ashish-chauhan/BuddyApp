import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
    View, Text, SafeAreaView,
    StatusBar, Image, ImageBackground, TouchableOpacity,
} from 'react-native';
import styles from './style';
import { Images } from "../../Theme";
// import firebaseSDK from "../../../config/firebaseSdk";

const Welcome = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#0090e6" barStyle="dark-content" />
            <View style={styles.mainWrapper}>
                <ImageBackground
                    source={Images.Images.bg}
                    resizeMode="cover"
                    style={styles.appLogoView}>
                    <View style={styles.headingView}>
                        <Text style={styles.headingText}>Buddy</Text>
                        <Text style={[styles.headingText, { fontWeight: "normal" }]}>Up</Text>
                    </View>

                    <Image
                        resizeMode={"contain"}
                        style={styles.logo}
                        source={Images.Images.buddyUpLogo} />

                </ImageBackground>

                <View style={styles.bottomView}>
                    <View style={styles.bottomTextView}>
                        <Text style={styles.welcomeText}>Welcome to BuddyUp!</Text>
                        <Text style={styles.text1}>
                            Let's find your best friend's best friend.
                        </Text>
                        <Text style={[styles.text1, { marginVertical: 0 }]}>
                            Start swiping to build your pack.
                        </Text>
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("OnBoardingSignInScreen")}
                            style={styles.registerButton}>
                            <Text style={styles.signInText}>Get Started</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}

                            style={[styles.registerButton, { marginTop: 30 }]}>
                            <Text style={styles.signInText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>

    )
}

export default Welcome