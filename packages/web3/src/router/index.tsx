import {createHashRouter} from 'react-router-dom'
import {Home, Login} from './elements'

const router = createHashRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])
export default router;