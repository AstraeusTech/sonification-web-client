/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const dynamic = 'force-dynamic'

interface Thumbnail {
  url: string;
  fileName: string;
}

const client = new S3Client({ region: process.env.AWS_DEFAULT_REGION });
const bucket = process.env.S3_BUCKET;

console.log(bucket);
console.log(process.env.AWS_DEFAULT_REGION);

async function getThumbnails() {
  const allObjects = [];
  let continuationToken;

  do {
    console.log("print bucket", bucket);
    const params: ListObjectsV2Command = new ListObjectsV2Command({
      Bucket: bucket,
      ContinuationToken: continuationToken,
    });

    const response = await client.send(params);
    const objects = response.Contents || [];
    allObjects.push(...objects);
    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  const recentImages = allObjects
    .filter(
      (obj) => obj.LastModified !== undefined && obj.Key?.includes(".png")
    )
    .sort((a, b) => {
      if (a.LastModified && b.LastModified) {
        return b.LastModified.getTime() - a.LastModified.getTime();
      }
      return 0;
    })
    .slice(0, 20);

  const images = await Promise.all(
    recentImages.map(async (obj) => {
      const params: GetObjectCommand = new GetObjectCommand({
        Bucket: bucket,
        Key: obj.Key,
      });

      const url = await getSignedUrl(client, params, {
        expiresIn: 3600,
      });

      return {
        url: url,
        fileName: obj.Key?.split(".")[0] as string,
      };
    })
  );

  return images;
}

export default async function Explore() {
  const data: Thumbnail[] = await getThumbnails();

  return (
    <div className="container pt-24">
      <h1 className="text-3xl font-bold mb-4">Latest Uploads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data &&
          data.map((image, index) => (
            <Link href={image.fileName ?? ""} key={`model-${index}`}>
              <div className="h-52 w-52 shadow-xl mx-auto overflow-hidden">
                <img
                  className="rounded-lg object-cover h-full w-full"
                  alt="Model Thumbnail"
                  src={image.url}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
