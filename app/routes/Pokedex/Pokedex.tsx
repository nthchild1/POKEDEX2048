import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import PokemonCard from '../../../src/uikit/PokemonCard/PokemonCard';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../../../src/graphQL/pokemon';
import PokedexSearchBar from '../../../src/uikit/PokedexSearchBar/PokedexSearchBar';

function Pokedex() {
  const [limit, setLimit] = useState(5);

  const {loading, error, data} = useQuery(GET_POKEMONS, {
    variables: {
      limit,
      offset: 0,
    },
  });

  const [mappedPokemon, setMappedPokemon] = useState([]);

  const [showingSearchResults, setShowingSearchResults] = useState(false);

  useEffect(() => {
    if (data && !showingSearchResults) {
      const {
        pokemons: {results},
      } = data;
      if (results) {
        const newMappedPokemon = results.map(result => {
          return {
            name: result.name,
            sprites: {
              front_default: result.image,
            },
          };
        });
        setMappedPokemon(newMappedPokemon);
      }
    }
  }, [data, showingSearchResults]);

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <PokedexSearchBar
        setMappedPokemon={setMappedPokemon}
        setShowingSearchResults={setShowingSearchResults}
      />
      {mappedPokemon.length > 0 && (
        <FlatList
          style={{backgroundColor: '#353535'}}
          data={mappedPokemon}
          renderItem={args => <PokemonCard {...args} />}
          onEndReached={() => {
            if (!loading) {
              setLimit(limit + 5);
            }
          }}
          onEndReachedThreshold={0.5}
          numColumns={1}
        />
      )}
      {!!loading && (
        <ActivityIndicator
          size={'large'}
          color={'red'}
          style={{position: 'absolute', alignSelf: 'center'}}
        />
      )}
    </View>
  );
}

export default Pokedex;
