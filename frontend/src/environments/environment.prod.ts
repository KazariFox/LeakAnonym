import { EnvironmentInterface } from './environment.interface';
import { getProdHostVariables } from './getHostVariables';

export const environment: EnvironmentInterface = {
  ...getProdHostVariables(),
  production: true,
};
