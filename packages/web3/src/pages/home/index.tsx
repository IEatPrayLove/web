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
            <button onClick={handleClick}>点击</button>
            <Outlet/>
        </Fragment>
    )
}
export default Home;