import 'dotenv/config';

export default {
  PORT: process.env.PORT || 3001,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/collab-docs',
  JWT_SECRET: process.env.JWT_SECRET || 'votre_super_secret_ici',
};
