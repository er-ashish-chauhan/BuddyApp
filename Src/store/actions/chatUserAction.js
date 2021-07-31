import {apiConstants as types} from '../../Theme/AppConstants'

// Login Action
export const chatUserList=(navigation)=>(
    {
        type:types.API_GET_USER_LIST_LOAD,
        navigation
    })


