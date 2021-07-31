import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView,ImageBackground, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView } from 'react-native';
import styles from './style';
import { colors, Images } from "../../Theme";

const MatchingScreen = ({ navigation }) => {

    return (
        <>

            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor="#0090e6" barStyle="dark-content" />
                <ImageBackground 
                  source={Images.Images.bg} 
                resizeMode="cover" 
                style={styles.mainWrapper}>

                    <View style={styles.itemView}>
                        <Text style={styles.heading}>Time to paw-ty, Ruby!</Text>
                    </View>
                    <View style={[styles.itemView, { flex: 0.2 }]}>
                        <Text style={styles.matchedWith}>You matched with Louie.</Text>
                        <Text style={styles.matchDesc}>The next step in becoming best friend is tosend Louie a not with in the 24 hours.</Text>
                    </View>
                    <View style={[styles.itemView, { flexDirection: "row", }]}>
                        <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                resizeMode={"cover"}
                                style={styles.imageStyle}
                                source={Images.Images.Louie}
                            />
                        </View>

                        <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                resizeMode={"cover"}
                                style={styles.imageStyle}
                                source={Images.Images.rubyAlford}
                            />
                        </View>


                    </View>

                    <View style={[styles.itemView, { flex: 0.3 }]}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("AllUserChatList")}
                            style={styles.registerButton}>
                            <Text style={styles.signInText}>Start a chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BuddyUpSwiper")}
                            style={[styles.registerButton, { marginTop: 30 }]}>
                            <Text style={styles.signInText}>Keep swiping</Text>
                        </TouchableOpacity>

                    </View>






                </ImageBackground>
            </SafeAreaView>
        </>

    )
}

export default MatchingScreen