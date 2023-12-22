import React,{useEffect} from 'react'
import {getUserInfo} from "../server/api";
const App = () => {
    const init = async()=>{
        const res = await getUserInfo()
        console.log(res)
    }
    useEffect(() => {
        void init()
    },[])
    return (
        <div>web3</div>
    )
}
export default App