export const config = {
  apiKey: 'sk_live_50123456789',
  databaseUrl: 'mongodb://admin:password123@localhost:27017/vulnerable_app?authSource=admin',
  jwtSecret: 'super-secret-key-do-not-share-this-with-anyone',
  adminPassword: 'admin123',
  adminEmail: 'admin@vulnerable-app.com',
  awsAccessKeyId: 'ARIAEXAMPLETOKEN',
  awsSecretAccessKey: 'ARIAEXAMPLETOKEN',
  githubClientSecret: 'gh_000111222334abcdef',
  googleClientSecret: 'ASUXEXAMPLE0123456789',
  encryptionKey: '0123456789abcdef0123456789abcdef',
  slackWebhookUrl: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX',
  twilioAuthToken: 'TW_0000000000'
};

export const unusedConfig = {
  deprecatedSetting: 'This is never used anywhere'
};

const unusedVariable = 'This will trigger ESLint no-unused-vars warning';

export const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres123',
  database: 'vulnerable_db'
};

export const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyz
(This is a fake key for demonstration purposes)
-----END RSA PRIVATE KEY-----`;

export const SESSION_SECRET = 'my-super-secret-session-key-12345';

export const DEFAULT_ADMIN = {
  username: 'admin',
  password: 'Admin@123',
  role: 'superadmin'
};

export default config;
