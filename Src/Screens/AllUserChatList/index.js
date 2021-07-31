import react from "react";
import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { colors, Images } from "../../Theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { height } from "../../Theme/responsiveStyles";
import { useDispatch, useSelector } from "react-redux";
import { chatUserList } from "../../store/actions/chatUserAction";

const expiringConnections = [
    {
       
        dogImages: Images.Images.rubyAlford,
    },
    {
        dogImages: Images.Images.Louie,
        clock: Images.Images.clockRed
    },
    {
        dogImages: Images.Images.pauline,
        clock: Images.Images.clockBlue
    },
    {
        dogImages: Images.Images.karsten,
        clock: Images.Images.clockRed
    },
    {
        dogImages: Images.Images.richard,
        clock: Images.Images.clockBlue
    },
    {
        dogImages: Images.Images.Louie,
    }
]

const chatList = [
    {
        id:1,
        dogImages: Images.Images.waldo,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    },
    {
        id:2,
        dogImages: Images.Images.richard,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    },
    {
        id:3,
        dogImages: Images.Images.rubyAlford,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    },
    {
        id:4,
        dogImages: Images.Images.waldo,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    },
    {
        id:5,
        dogImages: Images.Images.waldo,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    },
    {
        id:6,
        dogImages: Images.Images.waldo,
        name: "Waldo",
        message: "That's perfect. we will meet you"
    }
]

const AllUserChatList = ({ navigation }) => {

        const dispatch=useDispatch()
        const userState=useSelector(state=>state.authenticationReducer)
        useEffect(()=>{
                dispatch(chatUserList(navigation))
        },[])

    const renderItem = ({ item }) => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                    source={item.dogImages}
                />
                {item.clock && <Image
                    resizeMode={"cover"}
                    style={{ height: 30, width: 30, right: 0, position: "absolute", bottom: 5 }}
                    source={item.clock}
                />}
            </View>
        )
    }

    const renderListItem = ({ item }) => {
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate("Chat")}
            // onPress={() => navigation.navigate('Chat', { thread: item })}
            style={{ flexDirection: "row",marginTop:10, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 0.3,  }}>
                    <Image
                        resizeMode={"cover"}
                        style={styles.listImageStyle}
                        source={item.profile?item.profile:Images.Images.rubyAlford}
                    />
                    {/* <Icon name="chevron-left" height={25} width={25}/> */}
                </View>
                <View style={{ flex: 0.7,justifyContent:"center"}}>
                    <Text style={[styles.listName,]}>{item.name}</Text>
                    <Text style={[styles.message]}>{item.message?item.message:""}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>

            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <View style={styles.mainWrapper}>

                    <View style={styles.header}>
                        {/* <Image
                            style={styles.headerLeftIcon}
                            source={Images.Images.hamburgerMenu}
                            // source={require("../../Assets/Image/leftIcon.png")}
                        /> */}
                        <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        style={styles.headerLeftIcon}>
                        <Icon name="chevron-left" size={25} color="white" />
                        </TouchableOpacity>
                        <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>Buddy</Text>
                        <Text style={[styles.headerTitle, { fontWeight: "normal" }]}>Up</Text>
                        {/* <Icon name="angle-left" height={25} width={25} color={'red'} /> */}

                    </View>

                    <View style={styles.expiringView}>
                        {/* <FlatList
                            bounces={true}
                            data={expiringConnections}
                            // initialNumToRender={20}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps={'handled'}
                            extraData={this.state.chatList}
                            renderItem={({ item }) => this.userList(item)}
                        /> */}
                        <Text style={[styles.listHeading,]}>Expiring Connection</Text>
                        <FlatList
                            data={expiringConnections}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.listView}>

                        <Text style={[styles.listHeading,]}>Conversations</Text>
                        <FlatList
                            data={userState.userList}
                            renderItem={renderListItem}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </View>
            </SafeAreaView>
        </>

    )
}

export default AllUserChatList