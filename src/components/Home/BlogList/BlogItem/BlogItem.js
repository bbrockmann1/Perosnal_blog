import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip/Chip';
import './blogItem.css';

function BlogItem({ blog: { id, title, category, createdAt, cover, description } }) {
  const firstText = description.find(desc => desc.type === 'text');

  return (
    <Link className='blogItem-link' to={`/blog/${id}`}>
      <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3 className='title'>{title}</h3>
        {firstText && <p className='blogItem-desc'>{firstText.value.substring(0, 60) + '...'}</p>}
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
}

export default BlogItem;
