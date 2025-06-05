import React from "react";
import SearchIcon from "../assets/search-icon.svg";

const Search = ({ value, onChange, onKeyDown }) => {
    return (
        <div className="w-full flex flex-col gap-2 relative">
            <div className="relative w-full">
                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                    type="text"
                    className="w-full p-2 pl-10 text-base border-2 border-gray-400 rounded-md outline-none transition-all duration-300 focus:border-[#567CBD]"
                    placeholder="Cari Event"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
        </div>
    );
};

export default Search;