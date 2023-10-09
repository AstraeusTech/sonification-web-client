import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const dynamic = "force-dynamic";

const client = new S3Client();
const bucket = process.env.S3_BUCKET;

export async function GET(_request: Request) {
  const allObjects = [];
  let continuationToken;

  do {
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

  try {
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
    return new Response(JSON.stringify(images || []));
  } catch (e) {
    return new Response(JSON.stringify([]));
  }
}
