import axios  from "axios";
export function request(config){
  const instance =axios.create({
    baseURL:'http://127.0.0.1:8080/',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log('请求拦截err：'+err)
  })
  instance.interceptors.response.use(config=>{
    return config
  },err=>{
    console.log('响应拦截err'+err)
  })
  return instance(config)
}