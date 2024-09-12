"use client";
import React, { useState } from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import {
  useParams,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";

const Search = ({ placeholder, product }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (product) {
      const newProd = product.filter((item) => item.title.includes(search));
      console.log(newProd);
    }
  };
  return (
    <div className={styles.search}>
      <MdSearch />
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
