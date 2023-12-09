import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './blogList.css';

function BlogList({ blogs }) {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;