export const reducer = (prevstate, action)=>{
    switch (action.type) {
        case 'LOADtopnew_SUCCESSED':
            return {...prevstate, Topnew: action.payload }
        case 'LOADtopnew_FAILED':
            return {...prevstate}
        case 'LOADtoprate_SUCCESSED':
            return {...prevstate, Toprate: action.payload }
        case 'LOADtoprate_FAILED':
            return {...prevstate}
        default:
            throw new Error();
    }
}