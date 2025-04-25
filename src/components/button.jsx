import React from "react";

function Button({ label, type = "button", onClick }) {
  return (
    <button
      className="w-full p-3 text-base bg-[#567CBD] text-white rounded cursor-pointer"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
