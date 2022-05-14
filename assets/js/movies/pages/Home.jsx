import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='home-page movies'>
      <Header title="React Movies" />
      <Form />
    </div>
  )
}

export default Home;