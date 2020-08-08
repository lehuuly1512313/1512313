export const reducer = (prevstate, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESSED':
            return {...prevstate, Account: action.userInfo ,Token: action.token,}
        case 'LOGIN_FAILED':
            return {...prevstate}
        case 'LOGIN_SUCCESSED_WITH_GOOGLE':
            return {...prevstate, Account: action.userInfo ,Token: action.token,}
        default:
            throw new Error();
    }
}