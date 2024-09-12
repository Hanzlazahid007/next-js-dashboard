import { fetchSingleProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;

  const product = await fetchSingleProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* <input type="hidden" name="id" value={user.id} /> */}
          <label>Title</label>
          <input type="text" name="price" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="email" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>colour</label>
          <input type="text" name="colour" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />

          <label>Address</label>
          <textarea type="text" name="dwsc" placeholder={product.desc} />
          <label>cat</label>
          {/* <select name="cat">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select> */}

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
