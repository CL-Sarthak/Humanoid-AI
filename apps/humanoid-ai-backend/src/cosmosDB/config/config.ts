export const configuration = () => ({
  COSMOS_ACCOUNT_ENDPOINT: process.env.COSMOS_ACCOUNT_ENDPOINT,
  COSMOS_ACCOUNT_KEY: process.env.COSMOS_ACCOUNT_KEY,
  COSMOS_DATABASE: process.env.COSMOS_DATABASE,
  COSMOS_APPNAME: process.env.COSMOS_APPNAME || 'MyApp',
  COSMOS_MAX_IDLE_TIME_MS: process.env.COSMOS_MAX_IDLE_TIME_MS || '60000',
});
