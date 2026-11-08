import AWS from 'aws-sdk';

import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY
} from './server.config.js';

export const s3 = new AWS.S3({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  },
});

/*
import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

var s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  },
});

async function s3Uploader(data, folder) {
  const params = {
    Bucket: "ting-ting",
    Key: `${folder}/${data.originalname}`,
    Body: data.buffer,
    ACL: "public-read",
  };


  const command = new PutObjectCommand(params);
  await s3.send(command);
  const objectURL = `https://${params.Bucket}.s3.ap-south-1.amazonaws.com/${params.Key}`;
  return objectURL;
}


export default s3Uploader;
*/
