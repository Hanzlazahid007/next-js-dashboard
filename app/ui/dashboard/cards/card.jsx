import React from "react";
import styeles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styeles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styeles.text}>
        <span className={styeles.title}>Total Users</span>
        <span className={styeles.number}>10.273</span>
        <span className={styeles.details}>
          <span className={styeles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
