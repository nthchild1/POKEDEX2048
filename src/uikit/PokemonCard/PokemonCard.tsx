import React, {useEffect, useState} from 'react';
import {LayoutAnimation, Platform, Text, UIManager, View} from 'react-native';
import ItemCard from '../ItemCard/ItemCard';
import {useQuery} from '@apollo/client';
import {GET_POKEMON_DETAILS} from '../../graphQL/pokemon';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import {typesColors, typesImages} from '../../constants';
import styled from 'styled-components/native';

interface PokemonCardProps {
  index: number;
  item: {
    name: string;
    sprites: {
      front_default: string;
    };
  };
}

const PokemonNumber = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  margin: 20px;
  elevation: 10;
`;

const Container = styled.View`
  margin: 10px;
  padding-left: 20px;
  flex-direction: row;
  border-radius: 50px;
`;

function PokemonCard({item, index}: PokemonCardProps): JSX.Element {
  const {loading, error, data} = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      name: item.name,
    },
  });

  console.log(data);

  const pokemon = data?.pokemon ?? {};
  const pokemonType = pokemon?.types?.[0].type.name;
  const {id} = pokemon;

  const [isExpanded, setIsExpanded] = useState(index === 0);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const expand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <PokemonNumber>{id}</PokemonNumber>
      <ItemCard
        size={150}
        title={item.name}
        footerColor={typesColors[pokemonType]}
        itemImageSource={item.sprites.front_default}
        imageBackgroundSource={typesImages[pokemonType]}
        onPress={expand}
      />
      <PokemonDetails
        pokemon={pokemon}
        pokemonType={pokemonType}
        isExpanded={isExpanded}
      />
    </Container>
  );
}

export default PokemonCard;
