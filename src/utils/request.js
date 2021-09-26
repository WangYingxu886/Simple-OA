//axios的二次封装
import axios from "axios";
import config from '../config'

//根据配置文件更改base URL
function handleBaseUrl(){
    if(config.mock) return config.mockApi
    if(!config.mock) return config.baseApi
}
//创建axios实例对象
const service = axios.create({
    baseURL: handleBaseUrl(),
    timeout: 8000
})
//请求拦截
service.interceptors.request.use((req)=>{
    const headers = req.headers
    if(!headers.Authorization) headers.Authorization = 'Bear Jacv'
    return req
})
//响应拦截
service.interceptors.response.use((res)=>{
    if(res.status === 200){
        return res.data
    }
})
//请求方法
function request(options){
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get') options.params = options.data
    return service(options)
}

export default request