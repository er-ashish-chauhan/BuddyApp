import {apiConstants as types} from '../../Theme/AppConstants'

// Login Action
export const chatUserList=(navigation)=>(
    {
        type:types.API_GET_USER_LIST_LOAD,
        navigation
    })
export const matchUserList=(navigation)=>(
    {
        type:types.API_GET_MATCH_LIST_LOAD,
        navigation
    })
export const showHideData=(item,index)=>(
    {
        type:"API_SHOW_DATA_LOAD",
        index:index,
        item:item
    })
export const likeAction=(item,index,navigation)=>(
    {
        type:"API_LIKE_LOAD",
        index:index,
        item:item,
        navigation:navigation
    })
export const disLikeAction=(item,index,navigation)=>(
    {
        type:"API_DISLIKE_LOAD",
        index:index,
        item:item,
        navigation:navigation
    })


