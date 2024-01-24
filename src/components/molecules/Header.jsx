import Logo from "../atoms/Logo"
import Cart from "../atoms/Cart"
import Crumbs from "../atoms/Crumbs"

const Header = () => {

    return (
      <>
        <div className="container-menu">
          <div className="componente-menu">
            <Logo/>
          </div>
          <div className="componente-menu">
            <Crumbs/>
          </div>
          <div className="componente-menu">
            <Cart/>
          </div>
        </div>
      </>
    )

}

export default Header