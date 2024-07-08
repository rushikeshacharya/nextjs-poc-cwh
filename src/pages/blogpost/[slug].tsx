import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

interface BlogItem {
  title: string;
  contents: string;
  author: string;
  slug: string;
}

const slug = () => {
  const [blog, setBlog] = useState<BlogItem>();
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((parsed: BlogItem) => {
        setBlog(parsed);
      });
  }, [router.isReady]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <hr />
        <div>{blog?.contents}</div>
      </main>
    </div>
  );
};

export default slug;
