import React from "react";

const Search = () => {
    return(
        <div className='w-full flex flex-col gap-2'>
            <input 
            type='text' 
            className='w-full p-2 text-base border-2 border-[#b0bcca] rounded-md outline-none transition-all duration-300 box-order focus:border-2 focus:border-[#567CBD]' 
            placeholder='Cari Event'
            />
        </div>
    );
}

export default Search;