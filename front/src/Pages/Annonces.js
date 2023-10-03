import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { fetchPosts } from '../JS/Actions/add'; // Import the fetchPosts action

const Annonces = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    // Fetch posts when the component mounts
    dispatch(fetchPosts());
  }, [dispatch]);

  // Get posts from the Redux store
  const annonces = useSelector((state) => state.postReducer.annonceList);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {annonces.map((annonce) => (
          <div key={annonce._id} className="annonce">
            <h3>{annonce.name}</h3>
            <p>Category: {annonce.category}</p>
            <p>Description: {annonce.description}</p>
            <Link to={`/AnnonceDetail/${annonce._id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annonces;
