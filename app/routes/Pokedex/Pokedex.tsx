import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {useStorage} from '../../reducers/storage/useStorage';
import {useDispatch} from 'react-redux';
import {
  getMorePokemon,
  populatePokemonDB,
} from '../Categories/Categories.thunks';
import PokemonCard from '../../../src/uikit/PokemonCard/PokemonCard';

function Pokedex() {
  const Storage = useStorage();
  const {pokemon} = Storage.getFromStorage((state) => state.storage);
  const [isLoading, setIsLoading] = useState(false);
  const flatList = useRef();

  useEffect(() => {
    setIsLoading(true);
    Storage.dispatch(populatePokemonDB(5, Storage)).then(() => {
      setIsLoading(false);
      setMappedPokemon(
        Object.keys(pokemon)?.map((pokemonName) => ({
          title: pokemonName,
          ...pokemon[pokemonName],
        })),
      );
    });
  }, []);

  useEffect(() => {
    if (pokemon) {
      setMappedPokemon(
        Object.keys(pokemon)?.map((pokemonName) => ({
          title: pokemonName,
          ...pokemon[pokemonName],
        })),
      );
    }
  }, [pokemon]);

  const [mappedPokemon, setMappedPokemon] = useState([]);

  return (
    mappedPokemon.length > 0 && (
      <View>
        <FlatList
          style={{backgroundColor: '#353535'}}
          data={mappedPokemon}
          renderItem={(args) => <PokemonCard {...args} />}
          onEndReached={() => {
            if (!isLoading) {
              setIsLoading(true);
              Storage.dispatch(getMorePokemon(Storage)).then(() => {
                setIsLoading(false);
              });
            }
          }}
          onEndReachedThreshold={0.5}
        />
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            width: '100%',
            height: '100%',
          }}>
          {isLoading && <ActivityIndicator size="large" color="red" />}
        </View>
      </View>
    )
  );
}

export default Pokedex;
