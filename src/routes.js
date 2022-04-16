import { createWebHistory, createRouter } from 'vue-router'
import signup from './components/Signup.vue'
import login from './components/Login.vue'
import HomeComponent from './components/HomeComponent.vue'
import ComposeEmail from './components/ComposeEmail'
import ComposeWT from './components/ComposeWT'
import WelcomePage from './components/WelcomePage'
import ComposeDT from './components/ComposeDT'
import Error404 from './components/404'

const routes = [
    {
        path:'/',
        name: 'Welcome-page',
        component: WelcomePage
    },
    {
        path:'/login',
        name: 'login-component',
        component: login
    },
    {
        path:'/signup',
        name: 'signup-component',
        component: signup
    },
    {
        path:'/home',
        name: 'home-component',
        component: HomeComponent,
    },
    {
        path: '/home/dynamic_template',
        name: 'Dynamic-Template',
        component: ComposeWT
    },
    {
        path: '/home/sendsmail',
        name: 'Simple-Mail',
        component: ComposeEmail
    },
    {
        path: '/home/dynamic_template/form',
        name: 'DT-form',
        component: ComposeDT
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404-page',
        component: Error404
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;