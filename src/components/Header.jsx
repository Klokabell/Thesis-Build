import Navbar from "./NavBar";

const Header = () => {


  return (
    <div className="header">
      <img className="header__logo" src="../icons/basic_bolt.png"></img>
      <h1 className="heading-primary">
        Small Cap <span>Market Trader</span>
      </h1>
      <Navbar />
    </div>
  );
};


export default Header