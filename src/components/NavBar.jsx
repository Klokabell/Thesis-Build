import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="login">
        <input type="text" className="username" placeholder="Username"/>
        <input type="password" className="password" placeholder="Password"/>
      </div>
      <div className="icons">
        <div className="icontainer portfolio">
          <Link to="portfolio" className="link__portfolio">
            <button className="btn portfolio">
              <img src="/icons/navbar/portfolio/briefcase__filled-tlight.svg" alt="" className="svg__portfolio" />
            </button>
          </Link>
        </div>
        <div className="icontainer market">
          <Link to="market" className="link__market">
            <button className="btn market">
              <img src="../../../public/icons/navbar/search-dollar.svg" alt="" className="svg__market" />
            </button>
          </Link>
        </div>
        <div className="icontainer leaderboard">
          <Link to="leaderboard" className="link__leaderboard">
            <button className="btn leaderboard">
              <img src="../../../public/icons/navbar/leaderboard-trophy.svg" alt="" className="svg__leaderboard" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
