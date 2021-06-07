import Config from 'react-native-config';

interface defaultRemoteConfig {
  readonly FLAVOR: string;
  readonly DEBUG: boolean;
  readonly VERSION: string;
  readonly IOSBUNDLEID: string;
  readonly BUILD_TYPE: string;
  readonly APP_NAME: string;
  readonly APPLICATION_ID: string;
  readonly ENVIRONMENT: string;
  readonly VERSION_CODE: number;
  readonly VERSION_NAME: string;
  readonly getConstants: string;
  API_URL: string;
  SERVICES_CONFIG: object;
}

const defaultRemoteConfig: defaultRemoteConfig = {
  FLAVOR: Config.FLAVOR,
  DEBUG: Config.DEBUG === 'true',
  VERSION: Config.VERSION,
  IOSBUNDLEID: Config.IOSBUNDLEID,
  BUILD_TYPE: Config.BUILD_TYPE,
  APP_NAME: Config.APP_NAME,
  APPLICATION_ID: Config.APPLICATION_ID,
  ENVIRONMENT: Config.ENVIRONMENT,
  VERSION_CODE: parseInt(Config.VERSION_CODE, 10),
  VERSION_NAME: Config.VERSION_NAME,
  API_URL: Config.API_URL,
  SERVICES_CONFIG: {
    pokemon: {
      baseURL: 'https://pokeapi.co/api/v2',
      endpoints: {
        abilities: 'ability/',
        generations: 'generation/',
        regions: 'region/',
        types: 'type/',
        versions: 'versions/',
        pokemon: 'pokemon/',
        encounters: 'encounters/',
      },
    },
  },
};

export default defaultRemoteConfig;
