import React from "react";

export const Button = ({ label, type = "button", onClick, value, disabled }) => {
  let btnDisable = '';

  if (disabled) {
    btnDisable = 'bg-gray-400 cursor-not-allowed border-gray-400'
  } else {
    btnDisable = 'bg-[#567CBD] cursor-allowed hover:bg-[#2B5CB0] border-[#567CBD]'
  }

  return (
    <button
      className={`w-full p-2 border-2 text-base rounded ${btnDisable} text-white `}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
};