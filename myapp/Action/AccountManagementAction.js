import API from './../API/Api'
import {UpdateProfileURL} from './../API/Url'
const Api = new API()

export const ChangeInfo = (dispatch)=> (Token, Name, Phone, Avatar) =>{
          var data = {
            name: Name,
            avatar: Avatar,
            phone: Phone
          }
            const config = {
              headers: { Authorization: `Bearer ${Token}` }
          };
          
          Api.PutRequest(data,UpdateProfileURL, config).then(res=>{
            if(res.status === 200)
            {
                dispatch({type: 'CHANGEINFO_SUCCESSED', data: res.data})
            }
            else
            {
                dispatch({type: 'CHANGEINFO_FAILED'})
            }
          })
}


