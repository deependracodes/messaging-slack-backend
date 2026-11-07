import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const MONGO_DEV_URI = process.env.MONGO_DEV_URI || 'dev';
export const MONGO_PROD_URI = process.env.MONGO_PROD_URI || 'dev';
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';
export const ENABLE_EMAIL_VERIFICATION =
  process.env.ENABLE_EMAIL_VERIFICATION || 'false';
