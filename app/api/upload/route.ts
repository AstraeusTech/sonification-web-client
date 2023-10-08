import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({ region: process.env.AWS_DEFAULT_REGION});
const bucket = process.env.S3_BUCKET;

import { v4 as uuidv4 } from 'uuid';

async function uploadFile(buffer: Buffer) {
  const uuid = uuidv4();
  const uploadCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: uuid + '.png',
    Body: buffer,
  });

  try {
    await client.send(uploadCommand);
  } catch (err: any) {
    if (err.code === 'EntityAlreadyExists') {
      console.error(`File with key ${uuid} already exists. Retrying with new UUID.`);
      await uploadFile(buffer);
    } else {
      console.error(err);
    }
  }
}

export async function POST(request: Request) {
  const buffer = await request.arrayBuffer();

  await uploadFile(Buffer.from(buffer));
  
  return new Response("File uploaded successfully");
}

