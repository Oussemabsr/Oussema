import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisementListing = () => {
  // Fake announcements
  const fakeAnnouncements = [
    {
      id: 1,
      name: 'Mohamed',
      email: 'mohamed17@gmail.com',
      phone: '55555555',
      address: 'La Soukra, Ariana',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '12345678',
      address: 'New York, USA',
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '87654321',
      address: 'London, UK',
    },
  ];

  return (
    <div>
      <h2>Featured Announcements</h2>
      {fakeAnnouncements.map((announcement) => (
        <div key={announcement.id}>
          <p>Name: {announcement.name}</p>
          <p>Email: {announcement.email}</p>
          <p>Phone: {announcement.phone}</p>
          <p>Address: {announcement.address}</p>
          <Link to={`/advertisementDetail/${announcement.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default AdvertisementListing;
