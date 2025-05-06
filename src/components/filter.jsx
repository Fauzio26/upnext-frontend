import React from 'react'

export const FilterButton = ({label, isActive, onClick}) => {
    let btnFilter = 'flex justify-center border-2 p-2 rounded-md transition-all duration-200'

    if (isActive) {
        btnFilter += ' bg-[#567CBD] text-white border-[#567CBD]';
    } else {
        btnFilter += ' bg-white text-[#567CBD] border-gray-400'; 
    }

    return (
        <div>
            <button className={btnFilter} onClick={onClick}>{label}</button>
        </div>
    );
}