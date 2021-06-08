import React from 'react';
import {Text, View} from 'react-native';
import {normalizePx} from '../../utils/utilFunctions';
import * as Progress from 'react-native-progress';
import {colors} from '../../constants';
import styled from 'styled-components/native';

interface PokemonDetailsProps {
  isExpanded: boolean;
  pokemon: object;
  pokemonType: string;
}

const Container = styled.View`
  background-color: ${({pokemonRed}) => pokemonRed};
  flex: 1;
  margin-right: ${normalizePx(20)}px;
  margin-top: ${normalizePx(35)}px;
  margin-bottom: ${normalizePx(35)}px;
  border-radius: 15px;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const Label = styled.Text`
  color: black;
  font-size: 10px;
  font-weight: bold;
`;

const Value = styled.Text`
  color: white;
`;

export const Stats = styled.View`
  background-color: white;
  flex: 1;
  width: 100%;
  padding: 15px;
  align-items: center;
`;

function PokemonDetails({
  pokemon,
  pokemonType,
  isExpanded,
}: PokemonDetailsProps): JSX.Element {
  const {pokemonRed} = colors;

  return isExpanded ? (
    <Container {...{pokemonRed}}>
      <View style={{padding: '5%'}}>
        <Label>
          HEIGHT : <Value>{pokemon.height} ft</Value>
        </Label>
        <Label>
          TYPE : <Value> {pokemonType}</Value>
        </Label>
        <Label>
          ABILITIES :
          <Value>
            {pokemon?.abilities?.map(({ability}) => ability.name).join(', ')}
          </Value>
        </Label>
      </View>
      <Stats>
        {pokemon?.stats?.map(stat => {
          return (
            <View key={stat?.stat?.name + ' : ' + stat?.base_stat}>
              <Text style={{color: 'black', fontSize: 10}}>
                {stat?.stat?.name + ' : ' + stat?.base_stat}
              </Text>
              <Progress.Bar progress={stat?.base_stat / 100} width={100} />
            </View>
          );
        })}
      </Stats>
    </Container>
  ) : (
    (null as unknown as JSX.Element)
  );
}

PokemonDetails.defaultProps = {
  isExpanded: true,
  pokemonType: 'fire',
  pokemon: {
    height: 5,
    id: 5,
    sprites: {
      front_default: '',
    },
    types: {
      type: {
        name: 'fire',
      },
    },
    abilities: [
      {
        ability: {
          name: 'overgrow',
        },
      },
    ],
    stats: [
      {
        stat: {
          name: 'hp',
        },
        base_stat: 54,
      },
    ],
  },
};

export default PokemonDetails;
