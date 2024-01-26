import { useState } from "react";
import Title from "./Title";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  return (
    <div className="flex flex-wrap justify-between">
      <Title />
      <div className="">
        <ul className="flex justify-between gap-6 font-extrabold text-2xl mt-12 mr-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button className="login-button" onClick={handleLogin}>
              {isLogged ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;