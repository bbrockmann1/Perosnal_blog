import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './blogList.css';

function BlogList({ blogs }) {
  
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  return (
    <div className='blogList-wrap'>
      {sortedBlogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
