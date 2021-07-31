import {apiConstants as types} from '../../Theme/AppConstants'

// Login Action
export const loginAction=(email,password,navigation)=>(
    {
        type:types.API_LOGIN_LOAD,
        email,
        password,
        navigation
    })
//signup action
    export const signupAction=(payload,navigation)=>({
        type:types.API_SIGNUP_LOAD,
        payload,
        navigation
    })
    //UPDATE PROFILE
    export const updateAction=(payload,navigation)=>({
        type:types.API_EDIT_USER_DETAILS_LOAD,
        payload,
        navigation
    })

// Forgot Password Action
export const forgotPasswordAction=(email)=>({
    type:types.API_FORGOT_PASSWORD_LOAD,
    email,
})

export const resetPasswordAction=(newPassword,query)=>({
    type:types.API_RESET_PASSWORD_LOAD,
    newPassword,
    query,
})

export const checkResetPasswordAction=(id)=>({
    type:types.API_CHECK_RESET_PASSWORD_LOAD,
    id,
})

export const notificationSettingGet = (value) => ({
    type: 'NOTIFICATION_SETTING_GET_LOAD',
    value
})
export const adsSettingGet = (value) => ({
    type: 'ADS_SETTING_GET_LOAD',
    value
})

