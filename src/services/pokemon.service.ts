import axios from 'axios';
import FirebaseService from '../../src/services/firebase.service';
import {
  generateGetResourceList,
  generateGetSingleResource,
} from './servicesUtils';

class PokemonService {
  public getPokemonAbilities: (queries?: {}) => any;

  constructor() {
    this.serviceConfig = FirebaseService.remoteConfig.SERVICES_CONFIG.pokemon;
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
      this.serviceConfig.endpoints.types,
      this.client,
    );

    this.getPokemonById = generateGetSingleResource(
      this.serviceConfig.endpoints.pokemon,
      this.client,
    );

    this.getAllPokemon = generateGetResourceList(
      this.serviceConfig.endpoints.pokemon,
      this.client,
    );
  }

  async getEncounterAreaById(pokemonId) {
    const URL =
      'pokemon/' + pokemonId + '/' + this.serviceConfig.endpoints.encounters;

    return this.client.get(URL).then(({data}) => data);
  }
}

const pokemonService = new PokemonService();
Object.freeze(pokemonService);

export default pokemonService;
