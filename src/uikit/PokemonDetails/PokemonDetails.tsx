import React from 'react';
import {Text, View} from 'react-native';
import {normalizePx} from '../../utils/utilFunctions';
import * as Progress from 'react-native-progress';
import {colors} from '../../constants';
import styled from 'styled-components/native';

interface PokemonDetailsProps {}

const Container = styled.View`
  background-color: ${({pokemonRed}) => pokemonRed};
  flex: 1;
  margin-right: ${normalizePx(20)};
  margin-top: ${normalizePx(35)};
  margin-bottom: ${normalizePx(35)};
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

const Stats = styled.View`
  background-color: white;
  flex: 1;
  width: 100%;
  padding: 15px;
  align-items: center;
`;

function PokemonDetails({
  pokemon,
  pokemonType,
}: PokemonDetailsProps): JSX.Element {
  const {pokemonRed} = colors;

  return (
    <Container {...{pokemonRed}}>
      <View style={{padding: '5%'}}>
        <Label>
          HEIGHT : <Value>{pokemon.height} ft</Value>
        </Label>
        <Label>
          TYPES : <Value> {pokemonType}</Value>
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
            <>
              <Text style={{color: 'black', fontSize: 10}}>
                {stat?.stat?.name + ' : ' + stat?.base_stat}
              </Text>
              <Progress.Bar progress={stat?.base_stat / 100} width={100} />
            </>
          );
        })}
      </Stats>
    </Container>
  );
}

PokemonDetails.propTypes = {};

export default PokemonDetails;
