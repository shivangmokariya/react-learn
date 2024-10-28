import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {
  const [category, setCategory] = useState('All');
  const [lastCategory, setLastCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    if (newCategory === lastCategory && newCategory !== 'All') {
      setCategory('All');
      setLastCategory(null); 
    } else {
      setCategory(newCategory);
      setLastCategory(newCategory); 
    }
  };

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={handleCategoryChange} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
