import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({ region: process.env.AWS_DEFAULT_REGION });
const bucket = process.env.S3_BUCKET;

import { v4 as uuidv4 } from 'uuid';

async function uploadFile(buffer: Buffer): Promise<string> {
  const uuid = uuidv4();
  const uploadCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: uuid + '.png',
    Body: buffer,
  });

  try {
    await client.send(uploadCommand);

    console.log('uploaded file to s3');
    console.log('attempting to call python api');

    console.log(
      'process.env.SONIFICATION_API_URL: ',
      process.env.SONIFICATION_API_URL,
    );

    const res = await fetch(`${process.env.SONIFICATION_API_URL}/${uuid}.png`, {
      headers: {
        contentType: 'application/json',
      },
    });

    // console.log('res: ', res);

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('response was ok');
    return uuid;
  } catch (err: any) {
    if (err.code === 'EntityAlreadyExists') {
      console.error(
        `File with key ${uuid} already exists. Retrying with new UUID.`,
      );
      await uploadFile(buffer);
    } else {
      console.error(err);
    }
  }

  return '';
}

export async function POST(request: Request) {
  const buffer = await request.arrayBuffer();

  const fileName = await uploadFile(Buffer.from(buffer));

  return new Response(
    JSON.stringify({
      id: fileName,
    }),
  );
}
