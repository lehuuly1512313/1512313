export const reducer = (prevstate, action)=>{
    switch (action.type) {
        case 'LOAD_SUCCESSED':
            return {...prevstate, Teacher: action.payload }
        case 'LOAD_FAILED':
            return {...prevstate}
        default:
            throw new Error();
    }
}