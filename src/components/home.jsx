import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/test">Test</Link>
            <h1>Home Page</h1>
        </>
    )
}

export default Home