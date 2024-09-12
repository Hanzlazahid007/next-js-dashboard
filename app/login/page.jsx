import React from "react";
import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button className={styles.button}>login</button>
      </form>
    </div>
  );
};

export default LoginPage;
