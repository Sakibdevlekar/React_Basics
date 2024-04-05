import { useState } from "react";

function Pagination({ page, handlePreviousPage,handleNextPage}) {
  return (
    <div className="bg-gray-900/40  h-10 flex justify-center gap-5 font-bold items-center">
      <div className="hover:scale-200 duration-500 hover:cursor-pointer" 
      onClick={handlePreviousPage}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </div>
      <div>{page}</div>
      <div onClick={handleNextPage}>
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
