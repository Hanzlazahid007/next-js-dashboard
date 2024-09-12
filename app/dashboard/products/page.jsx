import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { deleteProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

const Pages = async () => {
  const product = await fetchProduct();

  const handleDelete = async (id) => {
    try {
      await deleteProduct(new FormData().append("id", id));
      // You might want to refresh the products list here or provide some feedback to the user
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search product={product} placeholder={"search for user..."} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.btn}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={item.img || "/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {item.title}
                  </div>
                </td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td>{item.createdAt.toString().slice(4, 16)}</td>
                <td>{item.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${item._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Pages;
