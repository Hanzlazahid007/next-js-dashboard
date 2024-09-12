import React from "react";
import styles from "@/app/ui/dashboard/users/user.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { connectToDB } from "@/app/lib/util";
import { fetchUser } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

const UsersPage = async ({ searchParams }) => {
  const users = await fetchUser();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for user..."} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.btn}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>created at</td>
                <td>{user.isAdmin ? "admin" : "client"}</td>
                <td>{user.isActive ? "active" : "passive"} </td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>

                    <form>
                      <input
                        type="hidden"
                        name="id"
                        value={user._id.toString()}
                      />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
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

export default UsersPage;
