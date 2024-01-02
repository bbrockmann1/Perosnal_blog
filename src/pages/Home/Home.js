import React, { useEffect, useState } from 'react';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import BlogList from '../../components/Home/BlogList/BlogList';
import Header from '../../components/Home/Header/Header';
import SearchBar from '../../components/Home/SearchBar/SearchBar';

function Home() {
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/blogs') // Replace with your server URL
      .then((res) => res.json())
      .then((data) => {
        setOriginalBlogs(data);
        setBlogs(data);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const filteredBlogs = originalBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setSearchKey('');
    setBlogs(originalBlogs);
  };
  
  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
