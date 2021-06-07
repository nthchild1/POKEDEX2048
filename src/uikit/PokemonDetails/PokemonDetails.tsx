import React from 'react';
import {Text, View} from 'react-native';
import {normalizePx} from '../../utils/utilFunctions';
import * as Progress from 'react-native-progress';

const PokemonDetails = ({pokemon, pokemonType}) => {
  return (
    <View
      style={{
        backgroundColor: '#dd4e4e',
        flex: 1,
        marginRight: normalizePx(20),
        marginTop: normalizePx(35),
        marginBottom: normalizePx(35),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}>
      <View style={{padding: '5%'}}>
        <Text style={{color: 'white', fontSize: 10}}>
          HEIGHT : {pokemon.height} ft
        </Text>
        <Text style={{color: 'white', fontSize: 10}}>
          TYPES : {pokemonType}
        </Text>
        <Text style={{color: 'white', fontSize: 10}}>
          ABILITIES :{' '}
          {pokemon?.abilities?.map(({ability}) => ability.name).join(', ')}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          width: '100%',
          padding: 15,
          alignItems: 'center',
        }}>
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
      </View>
    </View>
  );
};

PokemonDetails.propTypes = {};

export default PokemonDetails;
