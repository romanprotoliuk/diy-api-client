import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-link-space">
        <Link to="/">Home</Link>
      </div> 
    </nav>
  )
}

export default Header