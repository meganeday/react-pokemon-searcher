import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  handlePokemon() {
    return this.props.pokemonLocalArr.map(pokemonObj => (<PokemonCard key={pokemonObj.id} pokemon={pokemonObj} />))
  }

    
  
    render() {
      // console.log(this.props.pokemonLocalArr)
      // console.log(this.arrayOfPokemon)
    return (
      <Card.Group itemsPerRow={6}>
        {this.handlePokemon()}
        {/* <PokemonCard /> */}
      </Card.Group>
  )}
}

export default PokemonCollection
