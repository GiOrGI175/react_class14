import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../AuthProvaider';

const Home = () => {
  const navigate = useNavigate();
  const { user, signIn } = UseAuth();

  const handlesumbit = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;

    signIn(username, () => navigate('/admin'));
  };

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <div>
          <h1>welcome{user}</h1>
        </div>
      ) : (
        <form action='' onSubmit={handlesumbit}>
          <label htmlFor='username'>username:</label>
          <input type='text' id='username' />
          <button type='submit'>submont</button>
        </form>
      )}
    </div>
  );
};

export default Home;
