import React from "react";

const Logo = () => {
  return (
    <button class="button" data-text="Awesome">
      <span class="actual-text">
        &nbsp;Kacper
        <span className="opacity-0 select-none pointer-events-none">_</span>
        Biegański&nbsp;
      </span>
      <span aria-hidden="true" class="hover-text">
        &nbsp;Kacper
        <span className="opacity-0 select-none pointer-events-none">_</span>
        Biegański&nbsp;
      </span>
    </button>
  );
};

export default Logo;
