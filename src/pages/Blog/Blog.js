import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip/Chip';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import './blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let foundBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 className='blog-title'>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          {blog.description.map((item, index) => {
            if (item.type === 'text') {
              return <p key={index} className='blog-desc'>{item.value}</p>;
            } else if (item.type === 'image') {
              <div></div>
              return <img key={index} src={item.value} alt={`${index}`}/>;
            }
            return null;
          })}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default Blog;
