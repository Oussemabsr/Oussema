import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserProfile = () => {
 
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="profile">
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          />
          <Card.Body>
            {user && (
              <>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.phone}</Card.Text>
                <Card.Text>{user.address}</Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;


