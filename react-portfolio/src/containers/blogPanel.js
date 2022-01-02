import React from "react";
import BlogPosts from "../components/blog/blogPosts";
import SectionDivider from "../components/sectionDivider";

// import { fetchBlogPosts } from "../components/blog/blogHelpers";

const BlogPanel = () => {
  // const posts = fetchBlogPosts();
  return (
    <React.Fragment>
      <SectionDivider text="Blogs" />
      <div className="blog-card solid-background" id="blog-panel">
        <BlogPosts />
      </div>
    </React.Fragment>
  );
};

export default BlogPanel;
