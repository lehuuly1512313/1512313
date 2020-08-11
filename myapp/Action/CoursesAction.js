import API from './../API/Api'
import {topnewURL, toprateURL} from './../API/Url'
const Api = new API()


export const Loadtopnew = (dispatch)=> () =>{
          var data = {
            limit: 10,
            page: 1
          }
          Api.PostRequest(data,topnewURL, null).then(res=>{
            if(res.status === 200)
            {
                dispatch({type: 'LOADtopnew_SUCCESSED', data: res.data})
            }
            else
            {
                dispatch({type: 'LOADtopnew_FAILED'})
            }
          })
}

export const Loadtoprate = (dispatch)=> () =>{
    var data = {
      limit: 10,
      page: 1
    }
    Api.PostRequest(data,toprateURL, null).then(res=>{
        if(res.status === 200)
        {
            dispatch({type: 'LOADtoprate_SUCCESSED', data: res.data})
        }
        else
        {
            dispatch({type: 'LOADtoprate_FAILED'})
        }
      })
}


