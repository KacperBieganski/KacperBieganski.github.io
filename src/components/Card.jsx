import React from "react";

const Card = () => {
  return (
    <div className="relative group flex flex-col items-center justify-center w-full h-full">
      <div className="file relative w-[52px] h-[33px] cursor-pointer origin-bottom [perspective:340px] z-50">
        <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-md rounded-tl-none group-hover:shadow-[0_4px_8px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-[16px] after:h-[3px] after:bg-amber-600 after:rounded-t-md before:absolute before:content-[''] before:-top-[3px] before:left-[16px] before:w-[4px] before:h-[4px] before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]" />
        <div className="work-4 absolute inset-[0.093rem] bg-zinc-400 rounded-md transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]" />
        <div className="work-3 absolute inset-[0.093rem] bg-zinc-300 rounded-md transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
        <div className="work-2 absolute inset-[0.093rem] bg-zinc-200 rounded-md transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />
        <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[33px] rounded-md rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[30px] after:h-[3px] after:bg-amber-400 after:rounded-t-md before:absolute before:content-[''] before:-top-[2px] before:right-[29px] before:w-[2.5px] before:h-[2.5px] before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_4px_8px_#fbbf24,_inset_0_-4px_8px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(0.2px)]" />
      </div>

      <p className="pt-2">Projekty</p>
    </div>
  );
};

export default Card;
