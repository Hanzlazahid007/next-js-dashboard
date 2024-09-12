import { Product, User } from "./model";
import { connectToDB } from "./util";

export const fetchUser = async () => {
  try {
    connectToDB();
    const user = await User.find();
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fecth User");
  }
};
export const fetchProduct = async () => {
  try {
    await connectToDB(); // Ensure the database connection is established
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products");
  }
};
// single user
export const fetchSingleUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fecth User");
  }
};

// Single product
export const fetchSingleProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fecth User");
  }
};
