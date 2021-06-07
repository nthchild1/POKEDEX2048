import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useQuery} from '@apollo/client';
import {GET_POKEMON_DETAILS} from '../../graphQL/pokemon';

function PokedexSearchBar(props) {
  const [searchString, setSearchString] = useState<string>('');

  const {loading, error, data} = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      name: searchString,
    },
  });

  const searchForPokemon = () => {
    if (data) {
      const {pokemon} = data;

      if (pokemon.id != null) {
        props.setShowingSearchResults(true);
        props.setMappedPokemon([pokemon]);
      } else {
        props.setShowingSearchResults(false);
      }
    } else {
      props.setShowingSearchResults(false);
    }
  };

  useEffect(() => {
    searchForPokemon();
  }, [loading, error, data]);

  return (
    <SearchBar
      onChangeText={string => {
        setSearchString(string);
      }}
      onSubmit={searchForPokemon}
    />
  );
}

PokedexSearchBar.defaultProps = {};

export default PokedexSearchBar;
