import API from './../API/Api'
import {LoginURL} from './../API/Url'
const Api = new API()


export const Login = (dispatch)=> (username, password) =>{
          var Data = {
            email: username,
            password,
          }
          
          Api.PostRequest(Data,LoginURL,null).then(res=>{
            if(res.status === 200)
            {
                dispatch({type: 'LOGIN_SUCCESSED', data: res.data})
            }
            else
            {
                dispatch({type: 'LOGIN_FAILED'})
            }
          })
}


export const LoginWithGoogle = (dispatch)=> (email, id) =>{
    
         
    var Data = {
        user:{
            email,
            id
        }
    }
    
    Api.PostRequest(Data,LoginURL,null).then(res=>{
      if(res.status === 200)
      {
          dispatch({type: 'LOGIN_SUCCESSED_WITH_GOOGLE', data: res.data})
      }
      else
      {
          dispatch({type: 'LOGIN_FAILED'})
      }
    })
}