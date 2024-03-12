import {createHashRouter} from 'react-router-dom'
import {Home, Login, Mine} from './elements'

const router = createHashRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/mine',
        element: <Mine/>
    }
])
export default router;