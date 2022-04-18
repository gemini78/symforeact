import React from 'react'

const Form = () => {
  return (
    <div className='form-component'>
      <div className='form-container'>
        <form action="">
          <input type="text" placeholder='Entrer le titre du film' id="search-input" />
          <input type="submit" value="Rechercher" />
        </form>
        <div className='btn-sort-container'>
          <div className="btn-sort" id="goodToBad">Top<span>&#8594;</span></div>
          <div className="btn-sort" id="badToGood">Flop<span>&#8594;</span></div>
        </div>
      </div>
      <div className='result'></div>
    </div>
  )
}

export default Form