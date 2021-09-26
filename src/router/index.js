import { createRouter , createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home,
        meta:{
            title:'首页'
        },
        redirect:'/welcome',
        children:[
            {
                name:'welcome',
                path:'/welcome',
                component: ()=>import('../components/home/Welcome.vue'),
                meta:{
                    title:'欢迎页'
                }
            }
        ]
    },
    {
        name:'Login',
        path:'/login',
        component:()=>import('../views/Login.vue'),
        meta:{
            title:'登录页'
        }
    }
] 
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router