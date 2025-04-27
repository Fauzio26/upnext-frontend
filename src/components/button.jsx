import React from "react";

const Button = ({ label, type = "button", onClick }) => {
  return (
    <button
      className="w-full p-2 text-base bg-[#567CBD] text-white rounded cursor-pointer"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
