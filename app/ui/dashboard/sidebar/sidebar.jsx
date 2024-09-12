import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import NavLink from "../navLink/navLink";
import { usePathname } from "next/navigation";
// import { auth, signOut } from "@/app/auth";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  // const { user } = await auth();
  // const { session } = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="no avatar"
          height="50"
          width="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Dee</span>
          <span className={styles.userTitle}>Administration</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => {
          return (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>

              {cat.list.map((item) => {
                return <NavLink key={item.title} item={item} />;
              })}
            </li>
          );
        })}
      </ul>
      <form
      // action={() => {
      //   "use server";
      //   signOut();
      // }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Log out
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
