// 环境配置封装

const env = import.meta.env.MODE || 'production'
const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/c3ac953462fe6d2864c0156cc6792596/gbm'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/c3ac953462fe6d2864c0156cc6792596/gbm'
    },
    production:{
        baseApi:'/'
    }
}

export default {
    //开发环境
    env,
    namespace:'manager',
    mock:false,
    ...EnvConfig[env]    
}