import axios from 'axios'

class API {
    PostRequest=(Data, url, header)=>{
        return axios
        .post(url,Data,header)
        .then(res=>{
          return res;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    PutRequest=(Data, url, header)=>{
      return axios
      .put(url,Data,header)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  GetRequest=(url)=>{
    return axios
      .get(url)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  GetRequestWithParam=(url,param)=>{
    return axios
      .get(url+param)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  GetRequestWithTwoParam=(url,param1,param2)=>{
    return axios
      .get(url+param1+'/'+param2)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  GetRequestWithThreeParam=(url,param1,param2,param3)=>{
    return axios
      .get(url+param1+'/'+param2+'/'+param3)
      .then(res=>{
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  GetRequestWithParameHeader=(url,params, header)=>{
    return axios
    .get(url+params,header)
    .then(res=>{
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


export default API;