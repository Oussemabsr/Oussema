import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnnonceDetail = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    // Fetch the announcement details based on the ID from the URL
    axios.get(`/api/annonceDetail/${id}`)
      .then((response) => {
        console.log('API Response:', response.data);
        setAnnonce(response.data); // Assuming your API returns announcement details
      })
      .catch((error) => {
        console.error('Error fetching announcement details:', error);
      });
  }, [id]);

  if (!annonce) {
    // Display a loading message while fetching data
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{annonce.name}</h2>
      <p>Category: {annonce.category}</p>
      <p>Picture: {annonce.picture}</p>
      <p>Description: {annonce.description}</p>
      <p>Coordinates: {annonce.coordinates}</p>
    </div>
  );
};

export default AnnonceDetail;

