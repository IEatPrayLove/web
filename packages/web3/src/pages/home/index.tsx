import {Fragment, lazy, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
const Index = lazy(()=>import("../login"))

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/mine")
    }
    useEffect(() => {
        var a;
        var b = new Promise((resolve)=>{
            console.log("promise1");
            setTimeout(()=>{
                resolve()
            },1000)
        }).then(()=>{
            console.log("p2")
        }).then(()=>{
            console.log('p3')
        }).then(()=>{
            console.log('p4')
        })
        a = new Promise(async (resolve)=>{
            console.log(a)
            await b;
            console.log(a)
            console.log("after1")
            await a;
            resolve(true)
            console.log("after2")
        })
        console.log("end")
        const demo = document.getElementsByClassName("demo")

    }, []);
    return (
        <Fragment>
            <div>home</div>
            <template>
                <div className="demo">11111</div>
            </template>
            <hr/>
            <button onClick={handleClick} tabIndex={0}>点击</button>
            <form name="my">
                <input data-id="f1" name="one" value="1" tabIndex={1}/>
                <input data-id="f2" name="two" value="2" tabIndex={2}/>
                <input type="radio" name="age" value="10" tabIndex={3}/>
                <input type="radio" name="age" value="20" tabIndex={4}/>
                <input type="email" id="input" tabIndex={5} />
                <input type="text" style={{width:'220px'}} tabIndex={6} placeholder="make email invalid and try to focus here" />

                <select id="select" tabIndex={7}>
                    <option value="apple">Apple</option>
                    <option value="pear">Pear</option>
                    <option value="banana">Banana</option>
                </select>
            </form>
            <Outlet/>
        </Fragment>
    )
}
export default Home;