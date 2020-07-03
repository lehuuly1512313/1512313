import axios from 'axios'

class API {
    PostRequest=(Data, url)=>{
        return axios
        .post(url,Data)
        .then(res=>{
          return res;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    PutRequest=(Data, url)=>{
      return axios
      .put(url,Data)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


export default API;