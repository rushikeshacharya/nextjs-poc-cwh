import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import type { NextApiResponse } from "next";
import { error } from "console";
interface BlogItem {
  title: string;
  contents: string;
  author: string;
  slug: string;
}

const Blog = () => {
  const [blogs, setblogs] = useState<BlogItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((parsed: BlogItem[]) => {
        setblogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem: BlogItem) => (
          <div key={blogItem.title}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h2 className={styles.blogItemh2}>{blogItem.title}</h2>
            </Link>
            <p className={styles.blogItem}>{blogItem.contents.substring(0,100)}.....</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
