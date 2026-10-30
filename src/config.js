require('dotenv').config();

const REQUIRED_ENV = ['CORE_URL', 'INTERNAL_TOKEN'];
const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missing.length > 0) {
  missing.forEach((key) => console.error(`[fatal] Missing required environment variable: ${key}`));
  process.exit(1);
}

module.exports = {
  port: parseInt(process.env.PORT || '3005', 10),
  corsOrigin: process.env.CORS_ORIGIN || '*',
  coreUrl: process.env.CORE_URL.replace(/\/$/, ''),
  internalToken: process.env.INTERNAL_TOKEN,
};
