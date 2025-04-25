import React from "react";

function Input({ title, label, type = "text" }) {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h4 className="font-medium">{title}</h4>
            <input 
            type={type} 
            className='w-full p-3 text-base border-2 border-[#b0bcca] rounded-md outline-none transition-all duration-300 box-order focus:border-2 focus:border-[#567CBD]' 
            placeholder={label} 
            />
        </div>
    );
}

export default Input;