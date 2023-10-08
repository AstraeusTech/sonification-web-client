import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

interface GetParams {
  params: {
    id: string;
  };
}

const client = new S3Client({ region: process.env.S3_BUCKET_REGION });
const bucket = process.env.S3_BUCKET;

export async function GET(request: Request, { params }: GetParams) {
  const id = params.id;

  // create presigned url for the sound and 3D model files

  const getSoundFile = new GetObjectCommand({
    Bucket: bucket,
    Key: id + '.wav',
  });

  const get3DModelFile = new GetObjectCommand({
    Bucket: bucket,
    Key: id + '.pcd',
  });

  return new Response(
    JSON.stringify({
      soundFileUrl: await getSignedUrl(client, getSoundFile, { expiresIn: 3600 }),
      modelFileUrl: await getSignedUrl(client, get3DModelFile, {
        expiresIn: 3600,
      }),
    }),
  );
}
