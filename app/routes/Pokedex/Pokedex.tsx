import React, {useEffect, useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import PokemonCard from '../../../src/uikit/PokemonCard/PokemonCard';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../../../src/graphQL/pokemon';
import PokedexSearchBar from '../../../src/uikit/PokedexSearchBar/PokedexSearchBar';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

const Container = styled.View`
  justify-content: center;
  align-content: center;
  flex: 1;
`;

function Pokedex() {
  const [limit, setLimit] = useState(5);

  const {loading, data} = useQuery(GET_POKEMONS, {
    variables: {
      limit,
      offset: 0,
    },
  });

  const [mappedPokemon, setMappedPokemon] = useState([]);

  const [showingSearchResults, setShowingSearchResults] =
    useState<boolean>(false);

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
        SplashScreen.hide();
      }
    }
  }, [data, showingSearchResults]);

  return (
    <Container>
      <PokedexSearchBar
        setMappedPokemon={setMappedPokemon}
        setShowingSearchResults={setShowingSearchResults}
      />
      {mappedPokemon.length > 0 && (
        <FlatList
          style={{backgroundColor: '#353535'}}
          data={mappedPokemon}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => {
                setLimit(limit + 5);
              }}
            />
          }
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
    </Container>
  );
}

export default Pokedex;
