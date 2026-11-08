import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const MONGO_DEV_URI = process.env.MONGO_DEV_URI || 'dev';
export const MONGO_PROD_URI = process.env.MONGO_PROD_URI || 'dev';
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';
export const ENABLE_EMAIL_VERIFICATION =
  process.env.ENABLE_EMAIL_VERIFICATION || 'false';
export const MAIL_USER = process.env.MAIL_USER || '';
export const MAIL_PASS = process.env.MAIL_PASS || '';
export const REDIS_HOST = process.env.REDIS_HOST || '';
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || '';
export const AWS_REGION = process.env.AWS_REGION || '';
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
