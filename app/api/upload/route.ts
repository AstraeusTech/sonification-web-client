import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({ region: process.env.S3_BUCKET_REGION });
const bucket = process.env.S3_BUCKET;

async function uploadFile(file: File) {
  const uploadCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: file.name,
    Body: file,
  });

  try {
    await client.send(uploadCommand);
  } catch (err) {
    console.error(err);
  }
}

export async function POST(request: Request) {
  const images = await retrieveImages();
  const filteredImages = images
    .filter((image) => {
      return image.Key !== imagePrefix;
    })
    .map((image) => {
      return image.Key;
    });

  return new Response(JSON.stringify(filteredImages), {
    headers: { "content-type": "application/json" },
  });
}
