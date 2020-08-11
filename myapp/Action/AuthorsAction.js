import API from './../API/Api'
import {ListAuthorsURL} from './../API/Url'
const Api = new API()


export const Load = (dispatch)=> () =>{
          Api.GetRequest(ListAuthorsURL).then(res=>{
            if(res.status === 200)
            {
                dispatch({type: 'LOAD_SUCCESSED', data: res.data})
            }
            else
            {
                dispatch({type: 'LOAD_FAILED'})
            }
          })
}
