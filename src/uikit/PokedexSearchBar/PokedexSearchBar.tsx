import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useQuery} from '@apollo/client';
import {GET_POKEMON_DETAILS} from '../../graphQL/pokemon';

interface PokedexSearchBarProps {
  setShowingSearchResults: Function;
  setMappedPokemon: Function;
}

function PokedexSearchBar({
  setShowingSearchResults,
  setMappedPokemon,
}: PokedexSearchBarProps): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');
  const {loading, error, data} = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      name: searchString.toLowerCase(),
    },
  });

  const searchForPokemon = () => {
    if (data) {
      const {pokemon} = data;

      if (pokemon.id != null) {
        setShowingSearchResults(true);
        setMappedPokemon([pokemon]);
      } else {
        setShowingSearchResults(false);
      }
    } else {
      setShowingSearchResults(false);
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
