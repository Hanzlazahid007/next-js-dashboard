import { revalidatePath } from "next/cache";
import { Product, User } from "./model";
import { connectToDB } from "./util";

const bcrypt = require("bcryptjs");

import { redirect } from "next/navigation";
import { signIn } from "../auth"; // Adjust the path as nee

export const addUser = async (formData) => {
  const {
    username,
    phone,
    address,
    password,
    email,
    createdAt,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    connectToDB();
    const addUser = await User.create({
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      createdAt,
      isAdmin,
      isActive,
    });
    console.log("user added");
  } catch (err) {
    console.log(err);
    throw new Error("failed to Add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// perform for add product
export const addProduct = async (formData) => {
  console.log(formData);
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const addProduct = await Product.create({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });
    console.log("Product added", title, cat, price, stock, color, size, desc);
  } catch (err) {
    console.log(err);
    throw new Error("failed to Add user");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// delete product
export const deleteProduct = async (formdata) => {
  // const {id}
  console.log(Object.fromEntries(formdata));
  const { id } = Object.fromEntries(formdata);
  console.log(id);
  try {
    const prod = await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete product");
  }
  redirect("/dashboard/products");
};
// delete user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    console.log("user deleted");
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete User");
  }
  redirect("/dashboard/users");
};

// // update single user
// export const updateUser = async (formData) => {
//   const { id, username, password, email, isAdmin, isActive, phone, address } =
//     Object.fromEntries(formData);
//   console.log(id);
//   try {
//     connectToDB();
//     const updateFields = {
//       username,
//       password,
//       email,
//       isActive,
//       isAdmin,
//       phone,
//       address,
//     };
//     Object.keys(updateFields).forEach(
//       (key) =>
//         updateFields[key] === "" || (undefined && delete updateFields[key])
//     );
//     const user = await User.findByIdAndUpdate(id, updateFields);
//     console.log("user added");
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to Add user");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
// };

// updateUser.js (or wherever you have your server actions)

export const updateUser = async (formData) => {
  const { id, username, password, email, isAdmin, isActive, phone, address } =
    formData;
  try {
    await connectToDB();
    const updateFields = {
      username,
      password,
      email,
      isActive,
      isAdmin,
      phone,
      address,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );
    const user = await User.findByIdAndUpdate(id, updateFields);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user");
  }
};

// export const authenticate = async (formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (err) {
//     if (err.message.includes("CredentialsSignin")) {
//       return "Wrong Credentials";
//     }
//     throw err;
//   }
// };

// ==============

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      if (result.error.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw new Error(result.error);
    }

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
