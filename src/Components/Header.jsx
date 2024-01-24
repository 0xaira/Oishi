import logo from "../img/logo.png";

  const Header = () => {
    return (
      <>
        <header>
          <nav className="navbar">
          <div className="logo">
        <img
          className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-30 duration-200 ease-in"
          src={logo}
          alt="Logo"
        />
      </div>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Cart</li>
            </ul>
          </nav>
        </header>
      </>
    );
  };

    export default Header;