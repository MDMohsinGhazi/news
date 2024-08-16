import { useState } from "react";
import { useSearchParams, useNavigate, NavLink, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { navItem } from "./../constant";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate("/search");
      setSearchParams({
        q,
      });
    }
  };

  const handleReload = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <nav>
      <div className="flex justify-between px-10 pt-6 pb-4 border-[1px] border-b-border">
        <h1 className="flex flex-col cursor-pointer" onClick={handleReload}>
          <div className="text-2xl leading-4 text-Primary">News</div>
          <div className="text-sm font-light text-gray-500">The authantic</div>
        </h1>
        <div className="flex gap-8">
          <ul className="flex gap-4">
            <Link to={"/"}>News</Link>
            <Link to={"Sports"}>Sports</Link>
            <Link to={"videos"}>Videos</Link>
          </ul>
          <div className="flex items-center p-1 border-[1px] border-border h-7 rounded-2xl ">
            <IoIosSearch />
            <input
              className="flex-grow px-2 rounded-r-2xl focus:outline-none"
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={handleEnterPress}
            />
          </div>
        </div>
      </div>

      <div className="px-10 py-2">
        <ul className="flex justify-center gap-10">
          {navItem.map((item) => (
            <NavLink key={item} to={`/${item}`} className={({ isActive }) => (isActive ? "text-Primary" : "")}>
              {item ? item : "Home"}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
