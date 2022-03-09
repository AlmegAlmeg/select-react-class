import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <h1>THIS IS MY SITE</h1>
            <Link to='/buses' >Check our buses</Link>
        </>
    );
}
 
export default Homepage;