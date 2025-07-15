
import { BsCartFill} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"

function NavBar() {

  const handleSearch=()=>{};

  return (
    <nav className="navigation">
      <Link to="/" className="logo">
        <img src="/public/cloudShelf.svg" alt="logo" width={36} />
      </Link>
      <div className="search">
        <input className="search" type="search" placeholder="Search by prouct title ..."  onChange={handleSearch}/>
      </div>
      <div className="nav-link">
        <NavLink className="link" to="/">Shop</NavLink>
        <NavLink className="link icon" to="/cart"> <BsCartFill size={20} /><span className="cart-size">0</span></NavLink>
      </div>
    </nav>
  );
}

export default NavBar