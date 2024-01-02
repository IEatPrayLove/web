import React from 'react'

const Home= React.lazy(() => import('@/page/home'));
const Login = React.lazy(() => import('@/page/login'));
export {
    Home,
    Login
}