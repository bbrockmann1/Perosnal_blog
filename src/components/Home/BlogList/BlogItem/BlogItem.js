import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip/Chip';
import './blogItem.css';

function BlogItem({ 
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  }
 }) {
  return (
  <Link className='blogItem-link' to={`/blog/${id}`}>
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3 className='title'>{title}</h3>
      <p className='blogItem-desc'>{description.substring(0, 90) + '...'}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  </Link>
  );
};

export default BlogItem;