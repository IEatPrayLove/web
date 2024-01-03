import React from 'react'

const Home = React.lazy(() => import('@/pages/home'));
const Login = React.lazy(() => import('@/pages/login'));
const Mine = React.lazy(() => import('@/pages/mine'));
export {
    Home,
    Login,
    Mine
}