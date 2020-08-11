import API from './../API/Api'
import {} from './../API/Url'
const Api = new API()


export const Load= (dispatch)=> (id) =>{
          var data = {
            limit: 10,
            page: 1
          }
          Api.PostRequest(data,topnewURL, null).then(res=>{
            if(res.status === 200)
            {
                dispatch({type: 'LOAD_SUCCESSED', data: res.data})
            }
            else
            {
                dispatch({type: 'LOAD_FAILED'})
            }
          })

          Api.GetRequestWithParam(courseinfoURL, id).then(res=>{
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

