"use server";
import React from "react";
import styles from "@/app/ui/dashboard/products/addproduct/addproduct.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="title" name="title" />
        <select name="cat" id="cat">
          <option value={"general"}>general</option>
          <option value={"kitchen"}>kitchen</option>
          <option value={"phone"}>phone</option>
          <option value={"computer"}>computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="colour" name="color" />
        <input type="number" placeholder="size" name="size" />
        <textarea id="desc" placeholder="desc" name="desc" rows={10}></textarea>

        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
