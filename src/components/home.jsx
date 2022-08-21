import { Link } from "react-router-dom"
import styled from "styled-components"

const NavLink = styled(Link)`
    display: inline-block;
    margin: 10px;
`

const Home = () => {
    return(
        <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/test">Test</NavLink>
            <NavLink to="/customerdetails">CustomerDetails</NavLink>
            <NavLink to="/slider">Slider</NavLink>
            <h1>Home Page</h1>
        </>
    )
}

export default Home