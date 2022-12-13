import React, { useEffect } from 'react'
import Beer from './Beer'

function Beers({beers}) {
  return (
    <div>
        <div>{beers.map((beer, i) => <Beer key={i} beerData={beer}/>)}</div>
    </div>
  )
}

export default Beers