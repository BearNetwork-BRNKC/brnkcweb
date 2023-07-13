// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
  <a
    href="https://docs.bearnetwork.net/about/whitepaper"
    target="_blank"
    rel="noreferrer"
  >
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      WhitePaper
    </button>
  </a>
);

export default Button;
