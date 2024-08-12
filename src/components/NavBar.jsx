const Navbar = () => {
  return (
    <div className="flex items-center space-x-4 h-14">
      <button className="flex items-center justify-center h-full bg-gray-700 p-2 rounded">
        <img
          src="/icons/navbar/portfolio/briefcase__filled-tlight.svg"
          alt="Portfolio"
          className="h-10"
        />
      </button>
      <button className="flex items-center justify-center h-full bg-gray-700 p-2 rounded">
        <img
          src="../../../public/icons/navbar/search-dollar.svg"
          alt="Market"
          className="h-10"
        />
      </button>
      <button className="flex items-center justify-center h-full bg-gray-700 p-2 rounded">
        <img
          src="../../../public/icons/navbar/leaderboard-trophy.svg"
          alt="Leaderboard"
          className="h-10"
        />
      </button>
    </div>
  );
};

export default Navbar;
