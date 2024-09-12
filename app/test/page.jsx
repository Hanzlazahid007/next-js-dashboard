"use client";
import React, { useState } from "react";

const Page = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const submit = (e) => {
    // e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          //   value={data.username}
        />
        <input
          type="text"
          name="abc"
          onChange={handleChange}
          //   value={data.abc}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Page;
