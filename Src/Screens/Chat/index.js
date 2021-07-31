import react from "react";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView } from 'react-native';
import styles from './style';
import { colors, Images } from "../../Theme";
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FastImage from 'react-native-fast-image'

const PROP = [
    {
        key: 'one',
        text: 'Hi Waldo, I am Buddy Science Both love laying fetch, Do you want to meet up?',
    },
    {
        key: 'two',
        text: 'Woof Waldo, I am BUddy and i like that you are a little older, like me. Are you free for a low-key playdate?',
    },
    {
        key: 'three',
        text: 'Hello Waldo, I am Buddy. It looks like we are a match base of our love for naps. Do you have any time this week to meat for a short walk?',
    },

];

const Chat = ({ navigation }) => {

    // const [messages, setMessages] = useState(chatMessage);
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('two');
    const [SELECT, setSelect] = useState(false)
   
    
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: Images.Images.waldo,
            },
          },
        ])
      }, [])

    const chatMessage = [

        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },


    ]


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderChatEmptyView = () => {
        return (
            <View style={styles.wrapper}>
                <View style={{ height: 60, justifyContent: "center" }}>
                    <Text style={styles.heading}>One of our preset messages:</Text>
                </View>

                {PROP.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>
                            <View style={styles.selectionText}>
                                <Text style={styles.radioText}>{res.text}</Text>
                            </View>
                            <View style={styles.radioButtonView}>
                                <TouchableOpacity
                                    style={styles.radioCircle}
                                    onPress={() => {
                                        // setFirstMessage(res.name)
                                        setValue(res.key)
                                        setSelect(true)
                                       
                                        setMessages([

                                            {
                                                _id: 1,
                                                text: res.text,
                                                createdAt: new Date(),
                                                user: {
                                                    _id: 2,
                                                    name: 'React Native',
                                                    avatar: Images.Images.BuddyProfile,
                                                },
                                            },
                                    
                                    
                                        ])
                                    }}>
                                    {value === res.key && <View style={styles.selectedRb} />}
                                </TouchableOpacity>
                            </View>

                        </View>
                    );
                })}
                <View style={{ height: 60, justifyContent: "center" }}>
                    <Text style={styles.heading}>Or right your own::</Text>
                </View>

            </View>

        );
    }

    const renderBubble = (props) => {
        return (
            // Step 3: return the component
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: colors.primaryBlue
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        );
    }

    const renderItem = (obj) => {

        // console.log(obj.currentMessage.user.avatar);
        return (
            <Image
                source={obj.currentMessage.user.avatar}
                // source={{uri: obj.currentMessage.user.avatar}}
                style={{ width: 90, height: 90 , borderRadius:90/2, borderColor:"#e6e6e6", borderWidth:5}}
            />
        )
    }

    return (
        <>

            {/* <SafeAreaView style={{ flex: 1, }}>
                <StatusBar backgroundColor="#0090e6" barStyle="dark-content" />
                <View style={styles.mainWrapper}> */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.headerleftView}>
                    <Icon name="chevron-left" size={30} color="white" />
                </TouchableOpacity>
                <View style={[styles.headerleftView, { flex: 0.8 }]}>
                    <Text style={[styles.headerTitle, { fontWeight: "bold" }]}>waldo</Text>
                </View>
                <View style={styles.headerleftView}>
                    <Icon name="dots-vertical" size={30} color="white" />
                </View>

            </View>
            <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <GiftedChat
                messages={SELECT ? messages : []}
                onSend={messages => onSend(messages)}
                user={{ _id: 1, name: 'User Test',  avatar: Images.Images.waldo, }}
                renderChatEmpty={() => renderChatEmptyView()}
                inverted={true}
                renderBubble={renderBubble}
                showUserAvatar
                renderAvatar={obj => renderItem(obj)}
                showAvatarForEveryMessage={true}
            />
            </SafeAreaView>
            {/* </View>
            </SafeAreaView> */}
        </>

    )
}

export default Chat