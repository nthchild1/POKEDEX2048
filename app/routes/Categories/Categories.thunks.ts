import PokemonService from '../../../src/services/pokemon.service';

export const populatePokemonDB =
  (count, Storage) => async (dispatch, getState) => {
    const storageKeys = [
      'abilities',
      'generations',
      'regions',
      'types',
      'versions',
    ];

    const state = getState().storage;

    const mustPopulateKeys: boolean = storageKeys.some((storageKey) => {
      return !(storageKey in state);
    });

    if (mustPopulateKeys) {
      Promise.all([
        PokemonService.getPokemonAbilities(),
        PokemonService.getPokemonGenerations(),
        PokemonService.getPokemonRegions(),
        PokemonService.getPokemonTypes(),
        PokemonService.getPokemonVersions(),
      ]).then((result) => {
        result.forEach(({results}, index) => {
          Storage.writeToStorage(storageKeys[index], results);
        });
      });
    }

    if (
      !('pokemon' in state) ||
      (state?.pokemon?.length ?? count - 1 < count)
    ) {
      PokemonService.getAllPokemon({limit: count}).then(({results}) => {
        Promise.all(
          results.map((pokemonInfo) => {
            return PokemonService.getPokemonById(pokemonInfo.name).then(
              (pokemon) => {
                Storage.writeToStorage(
                  `pokemon.${pokemonInfo.name}`,
                  pokemon,
                  true,
                );
              },
            );
          }),
        );
      });
    }
  };

export const getMorePokemon = (Storage) => async (dispatch, getState) => {
  const storage = getState().storage;

  const currentPokemonIndex = Object.keys(storage?.pokemon).length;

  console.log(currentPokemonIndex, 'currentPokemonIndex');

  return PokemonService.getAllPokemon({
    offset: currentPokemonIndex,
    limit: 5,
  }).then(({results}) => {
    return Promise.all(
      results.map((pokemonInfo) => {
        PokemonService.getPokemonById(pokemonInfo.name).then((pokemon) => {
          Storage.writeToStorage(`pokemon.${pokemonInfo.name}`, pokemon, true);
        });
      }),
    );
  });
};

export default {
  populatePokemonDB,
};
