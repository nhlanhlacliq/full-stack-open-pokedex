import React from 'react'

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const PokemonAbility = ({ abilityName }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">Hidden ability</div>
    <div className="pokemon-ability-name">{abilityName}</div>
  </div>
)

export default PokemonAbility
