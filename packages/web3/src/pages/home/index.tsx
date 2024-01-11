import {Fragment} from "react";
import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/mine")
    }
    return (
        <Fragment>
            <div>home</div>
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