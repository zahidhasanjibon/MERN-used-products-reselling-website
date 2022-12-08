import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BannerSection from "../banner/BannerSection";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search/products", {
      state: {searchText},
    });
  };

  return (
    <div className="w-full md:w-4/5">
      <div className="px-16 flex items-center">
        <div className="w-10/12">
          <input
            onBlur={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Products"
            className="border-2 border-r-0 border-orange-400 px-2 py-3 w-4/5"
          />
          <button
            onClick={handleSearch}
            className="p-[14px] text-white bg-orange-600"
          >
            SEARCH
          </button>
        </div>
        <div className="w-1/5">
          <div className="flex items-center">
            <div className="w-16 rounded-full p-4 bg-slate-200">
              <AiOutlinePhone color="orange" size={26} />
            </div>
            <div className="ml-4">
              <h6 className="font-bold text-xl">+8801478666</h6>
              <p className="text-gray-400 pl-2">Support 7 /24</p>
            </div>
          </div>
        </div>
      </div>
      <BannerSection />
    </div>
  );
}
