import {Fragment, useEffect, useRef, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import './index.css'

const Home = () => {
    const [dom, setDom] = useState(null)
    const ref = useRef(false)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/mine")
    }

    useEffect(() => {
        if (ref.current) {
            console.log("一")
            setTimeout(() => {
                console.log("二")
                Promise.resolve().then(() => {
                    console.log("三")
                })
            }, 0)
            setTimeout(() => {
                console.log("四")
            }, 100)
        } else {
            ref.current = true
        }

    }, []);

    useEffect(() => {
        function test() {
            let n = 4399;

            function add() {
                n++;
                console.log(n)
            }

            return {n, add}
        }

        const result = test();
        const result2 = test();
        result.add()
        result.add()
        console.log(result.n)
        result2.add()
    }, [])
    useEffect(() => {
        // console.log(dom)
    }, [dom]);
    const text_str = "项目立项管理是对拟规划和实施的项目技术上的先进性、适用性、经济上的合理性、效益性、实施上的可能性、风险性以及社会价值的有效性"
    return (
        <Fragment>
            <div>
                <input type="checkbox"/>
            </div>
            <ul id="ulId">
                <li className="item">AAA</li>
                <li className="item">BBB</li>
                <li className="item">CCC</li>
            </ul>
            <Outlet/>
        </Fragment>
    )
}
export default Home;