import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import WebView from "react-native-webview";
import { Images, colors, typography } from "../../Theme";
import styles from './style';

const { width, height } = Dimensions.get("window");
export const About = (props) => {

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={[styles.header, {}]}>
        <TouchableOpacity
          style={styles.headerLeftIcon}
          onPress={() => props.navigation.toggleDrawer()}>
          <Image
            style={styles.headerLeftIcon}
            source={Images.Images.hamburgerMenu}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>About Us</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: height * .08
        }}
        style={styles.container}>
        <View style={{ marginTop: 0 }}>
          <Text style={styles.contentText}>
            Depending on how you interact with Wiley, Wiley may use your personal information in the performance of any contract or transaction we enter into with you, to comply with legal obligations, or where Wiley has a legitimate business interest. Legitimate business purposes include but are not limited to one or all of the following: providing direct marketing and assessing the effectiveness of promotions and advertising; modifying, improving or personalizing our services, products and communications; detecting fraud; investigating suspicious activity (e.g., violations of our Terms of Service, which can be found here) and otherwise keeping our site safe and secure; and conducting data analytics.

            In addition, with your prior, explicit consent (where required), we may use your information in the following ways:

            To provide you with information about products and services that you request from us;
            To send you periodic catalogues from Wiley;
            To provide you with information about other products, events and services we offer that are either (i) similar to those you have already purchased or inquired about, or (ii) entirely new products, events and services;
            For internal business and research purposes to help enhance, evaluate, develop, and create Wiley websites (including usage statistics, such as “page views” on Wiley’s websites and the products therein), products, and services;
            To notify you about changes or updates to our websites, products, or services;
            To provide, activate, and/or manage our services;
            For internal operations, including troubleshooting, data analysis, machine learning, testing, statistical, and survey purposes;
            To allow you to participate in interactive features of our service; and
            For any other purpose that we may notify you of from time to time.
            Personal information will not be kept longer than is necessary for the purpose for which it was collected. This means that, unless information must be retained for legal or archival purposes, personal information will be securely destroyed, put beyond use or erased from Wiley’s systems when it is no longer required or, where applicable, following a request from you to destroy or erase your personal information.
            To provide, activate, and/or manage our services;
            For internal operations, including troubleshooting, data analysis, machine learning, testing, statistical, and survey purposes;
            To allow you to participate in interactive features of our service; and
            For any other purpose that we may notify you of from time to time.
            Personal information will not be kept longer than is necessary for the purpose for which it was collected. This means that, unless information must be retained for legal or archival purposes, personal information will be securely destroyed, put beyond use or erased from Wiley’s systems when it is no longer required or, where applicable, following a request from you to destroy or erase your personal information.

          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
