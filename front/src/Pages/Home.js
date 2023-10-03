import React, { useEffect } from 'react';
import Annonces from '../Pages/Annonces'; 
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../JS/Actions/add'; // Import the fetchPosts action

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch posts when the component mounts
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Annonces />
    </div>
  );
};

export default Home;


