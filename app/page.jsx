"use client"; // Marks this component to run on the client-side
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` instead of `next/router` in Next.js 13+

const Homepage = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push("/dashboard"); // Navigates to /dashboard when the component mounts
  }, [router]);

  return <div>Homepage</div>;
};

export default Homepage;
