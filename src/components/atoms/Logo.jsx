import { Link } from "react-router-dom"
import logo from "/src/media/logo.png"

const Logo = () => {
    
    return (
        <Link to="/">
            <img src={logo} alt="Logo" className="logo"/>
        </Link>
    )

}

export default Logo