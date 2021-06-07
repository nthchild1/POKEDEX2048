import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';
import defaultRemoteConfig from '../../app/config';

class FirebaseService {
  remoteConfig: {};
  constructor() {
    this.remoteConfig = defaultRemoteConfig;
    this.getRemoteConfig(defaultRemoteConfig);
  }

  private static setDefaultValues(defaultRemoteConfig): Promise<void> {
    return remoteConfig()
      .setDefaults(defaultRemoteConfig)
      .then(() => remoteConfig().fetchAndActivate())
      .then((fetchedRemotely) => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
        }
      });
  }

  public getRemoteConfig = (defaultRemoteConfig): Promise<void> => {
    return FirebaseService.setDefaultValues(defaultRemoteConfig).then(() => {
      const parameters = remoteConfig().getAll();

      const rConfig = Object.entries(parameters).reduce(
        (rConfigArr, parameter) => {
          const [key, entry] = parameter;
          return {...rConfigArr, [key]: entry.asString()};
        },
        [],
      );
      this.remoteConfig = {...rConfig};
    });
  };
}

export default new FirebaseService();
