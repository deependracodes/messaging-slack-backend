import mongoose from 'mongoose';

import { NODE_ENV } from './server.config.js';

export default async function connectDB() {
  try {
    if (NODE_ENV === 'dev') {
      await mongoose.connect(process.env.MONGO_DEV_URI);
      console.log('connected to dev db successfully');
    } else {
      await mongoose.connect(process.env.MONGO_PROD_URI);
      console.log('connected to prod db successfully');
    }
  } catch (error) {
    console.log('error connecting db : ', error);
    process.exit(1);
  }
}
