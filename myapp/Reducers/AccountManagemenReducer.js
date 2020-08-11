export const reducer = (prevstate, action)=>{
    switch (action.type) {
        case 'CHANGEINFO_SUCCESSED':
            return {...prevstate, Account: action.userInfo}
        case 'CHANGEINFO_FAILED':
            return {...prevstate}
        default:
            throw new Error();
    }
}