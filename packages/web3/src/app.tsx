import React, {Fragment, Suspense} from 'react'
import {RouterProvider} from 'react-router-dom'

import router from './router'

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