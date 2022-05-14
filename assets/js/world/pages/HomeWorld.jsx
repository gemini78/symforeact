import React from 'react'
import Header from '../../movies/components/Header';
import Countries from '../components/Countries';

const HomeWorld = () => {
  return (
    <div className='world'>
      <Header title="React World" />
      <Countries />
    </div>
  )
}

export default HomeWorld;