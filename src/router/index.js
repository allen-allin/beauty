import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin/index'
import Home from '@/components/Admin/Home'
import Manage from '@/components/Admin/Manage'

Vue.use(Router)

export default new Router({
    mode: 'history',            //路由采用history模式
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,           //子路由
            children: [
                {
                    path: '/admin/home',
                    name: 'home',
                    component: Home,
                },
                {
                    path: '/admin/manage',
                    name: 'manage',
                    component: Manage
                }
            ]
        },
        {
            path: '*',              // 页面找不到时 重定向到登录页
            redirect: './login'
        }
    ]
})