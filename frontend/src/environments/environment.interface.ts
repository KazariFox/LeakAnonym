export interface HostVariables {
  host: string;
  apiUrl: string;
  assetsUrl: string;
}

export interface EnvironmentInterface extends HostVariables {
  production: boolean;
}
