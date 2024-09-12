"use client";
import React, { useState } from "react";
import style from "./pagination.module.css";

const Pagination = ({ product }) => {
  // const [currentPage, setCurrentPage] = useState(2);
  // const RecordPerPage = 3;
  // const lastIndex = currentPage * RecordPerPage;
  // const firstIndex = lastIndex - RecordPerPage;
  // const newProd = product.slice(firstIndex, lastIndex);
  // const nPages = Math.ceil(product.length / RecordPerPage);

  // console.log(newProd);
  // console.log(nPages);

  // const prev = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   } else {
  //     console.log(e);
  //   }
  // };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={(e) => prev} disabled>
        Previous
      </button>
      <button className={style.button}>Next</button>
    </div>
  );
};

export default Pagination;
