import React, { useEffect } from 'react'
import Beer from './Beer'

function Beers({beers, filter}) {
  return (
    <div>
        <div>{beers.filter((beer)=>beer.name.toLowerCase().includes(filter.toLowerCase())).map((beer, i) => <Beer key={i} beerData={beer}/>)}</div>
    </div>
  )
}

export default Beers