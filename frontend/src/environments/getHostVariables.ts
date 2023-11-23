import { HostVariables } from './environment.interface';

const DEV_HOST = 'http://127.0.0.1:8000';

const PROD_HOST = '';

function getHostVariables(host: string): HostVariables {
  return {
    host,
    apiUrl: host + '/api/',
    assetsUrl: host + '/assets/',
  };
}

export function getDevHostVariables(): HostVariables {
  return getHostVariables(DEV_HOST);
}

export function getProdHostVariables(): HostVariables {
  return getHostVariables(PROD_HOST);
}
