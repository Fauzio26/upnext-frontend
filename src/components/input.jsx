import React from "react";

export const Input = ({ title, label, type = "text", onChange, value }) => {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h4 className="font-medium">{title}</h4>
            <input 
            type={type} 
            className='w-full p-2 text-base border-2 border-gray-400 rounded-md outline-none transition-all duration-300 box-order focus:border-2 focus:border-[#567CBD]' 
            placeholder={label}
            value={value}
            onChange={onChange} 
            />
        </div>
    );
}