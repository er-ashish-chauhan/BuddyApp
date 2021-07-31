import {apiConstants as types} from '../../Theme/AppConstants'

const initialState = {
    isLoading : false,
    result:{},
    errorState:null,
    isExpired:null,
    status:0,
    userList:[]
}

export const authenticationReducer = (state = initialState, action)=>{
    switch (action.type) {

        // Authentication Cases
        // Login
        case types.API_LOGIN_LOAD:
            return {...state,isLoading :true,errorState:null}
        case types.API_LOGIN_SUCCESS:
            return {...state,isLoading:false, result : action.result}
            //sign
            case types.API_SIGNUP_LOAD:
            return {...state,isLoading :true,errorState:null}
        case types.API_SIGNUP_SUCCESS:
            return {...state,isLoading:false,status:1, result : action.result}

        // Forgot Password
        case types.API_FORGOT_PASSWORD_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_FORGOT_PASSWORD_SUCCESS:
            return {...state, isLoading:false}
        // user list
            case types.API_GET_USER_LIST_LOAD:
            return {...state,errorState:null, isLoading:true}
        case types.API_GET_USER_LIST_SUCCESS:
            return {...state, isLoading:false,userList:action.result}
        //Authentication Failed Case
        case types.API_AUTHENTICATION_FAILED:
            return {...state, isLoading:false}
        case types.API_AUTHENTICATION_ERROR:
            return {...state, isLoading:false}
        
        //Default case
        default:
            return {...state} 

    }
}