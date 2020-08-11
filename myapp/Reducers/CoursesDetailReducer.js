export const reducer = (prevstate, action)=>{
    switch (action.type) {
        case 'LOADtopnew_SUCCESSED':
            return {...prevstate, Courses: action.payload }
        case 'LOADtopnew_FAILED':
            return {...prevstate}
        default:
            throw new Error();
    }
}