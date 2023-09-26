import React from 'react';
import { useParams } from 'react-router-dom';

const AdvertisementDetail = () => {
  const { id } = useParams();

  const advertisement = {
    id: id,
    name: 'Mohamed',
    email: 'mohamed17@gmail.com',
    phone: '55555555',
    address: 'La Soukra, Ariana',
    title: 'Example Advertisement',
    description: 'This is an example advertisement.',
  };

  return (
    <div>
      <h2>{advertisement.title}</h2>
      <p>{advertisement.description}</p>
      <p>Name: {advertisement.name}</p>
      <p>Email: {advertisement.email}</p>
      <p>Phone: {advertisement.phone}</p>
      <p>Address: {advertisement.address}</p>
    </div>
  );
};

export default AdvertisementDetail;
