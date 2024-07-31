import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../../AuthProvaider';

const heeader = () => {
  const navigate = useNavigate();

  const { user, signOut } = UseAuth;

  const handlelogout = () => {
    signOut(() => navigate('/'));
  };

  return (
    <div>
      {user && (
        <>
          <div>welcome {user}</div>
          <button onClick={handlelogout}>log out</button>
        </>
      )}
    </div>
  );
};

export default heeader;
