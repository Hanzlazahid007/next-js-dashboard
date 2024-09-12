import React from "react";
import styles from "@/app/ui/dashboard/users/adduser/adduser.module.css";
import { addUser } from "@/app/lib/actions";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="text" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isAactive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          placeholder="Address"
          name="address"
          id="address"
          rows={10}
        ></textarea>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
