import React, {Fragment, Suspense} from 'react'
import {RouterProvider} from 'react-router-dom'
import dva from './dva'
import models from './model'
import router from './router'
const dvaApp = dva.createApp({
    initialState:{},
    models,
})
const store = dvaApp.getStore()
const App = () => {
    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                <RouterProvider router={router}/>
            </Suspense>
        </Fragment>
    )
}
export default App