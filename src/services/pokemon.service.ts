import axios from 'axios';
import {gql, useQuery} from '@apollo/client';

import {
  generateGetResourceList,
  generateGetSingleResource,
} from './servicesUtils';

class PokemonService {
  public getPokemonAbilities: (queries?: {}) => any;

  constructor() {
    this.serviceConfig = {
      baseUrl: 'https://pokeapi.co/api/v2',
      endpoints: {
        abilities: '/abilities',
        generations: '/generations',
        regions: '/regions',
        types: '/types',
        versions: '/versions',
        pokemon: '/pokemon',
        categories: '/categories',
      },
    };

    this.client = axios.create({
      baseURL: this.serviceConfig.baseURL,
    });

    this.getPokemonAbilities = generateGetResourceList(
      this.serviceConfig.endpoints.abilities,
      this.client,
    );

    this.getPokemonGenerations = generateGetResourceList(
      this.serviceConfig.endpoints.generations,
      this.client,
    );

    this.getPokemonRegions = generateGetResourceList(
      this.serviceConfig.endpoints.regions,
      this.client,
    );

    this.getPokemonTypes = generateGetResourceList(
      this.serviceConfig.endpoints.types,
      this.client,
    );

    this.getPokemonVersions = generateGetResourceList(
      this.serviceConfig.endpoints.versions,
      this.client,
    );

    this.getPokemonById = generateGetSingleResource(
      this.serviceConfig.endpoints.pokemon,
      this.client,
    );
  }
}

const pokemonService = new PokemonService();
Object.freeze(pokemonService);

export default pokemonService;
