import React, {Fragment, useEffect} from 'react'
import {RouterProvider} from 'react-router-dom'
import {getUserInfo} from "../server/api";
import router from './router'

const App = () => {
    const init = async () => {
        const res = await getUserInfo()
        console.log(res)
    }
    useEffect(() => {
        void init()
    }, [])
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    )
}
export default App