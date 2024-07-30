import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
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

  return (
    <nav>
      <div className="flex justify-between px-10 pt-6 pb-4 border-[1px] border-b-border">
        <h1 className="flex flex-col">
          <div className="text-2xl text-Primary leading-4">News</div>
          <div className="text-sm font-light text-gray-500">The authantic</div>
        </h1>
        <div className="flex gap-8">
          <ul className="flex gap-4">
            <li>News</li>
            <li>Sport</li>
            <li>Videos</li>
          </ul>
          <div className="flex items-center p-1 border-[1px] border-border h-7 rounded-2xl ">
            <IoIosSearch />
            <input
              className="flex-grow rounded-r-2xl h-full px-2 focus:outline-none"
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
          <li>Home</li>
          <li>Asia</li>
          <li>europe</li>
          <li>America</li>
          <li>Tech</li>
          <li>Sports</li>
          <li>Science</li>
          <li>Entertainment</li>
          <li>Health</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
