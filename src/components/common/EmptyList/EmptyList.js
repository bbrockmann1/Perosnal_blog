import React from 'react';
import './emptyList.css';

function EmptyList() {
  return (
    <div className='emptyList-wrap'>
      <img src='/assets/images/empty.png' alt='empty' />
    </div>
  );
};

export default EmptyList;