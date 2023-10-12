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


async function getThumbnails() {
  const exploreImageKeys = [
    "asteroid.png",
    "star-cluster.png",
    "sun.png",
    "cee9be4c-6152-403d-9bf9-8fbf95d8e91b.png",
    "fa68de26-4cd3-4054-abd5-6cae6f66f090.png",
    "c896c43e-af06-4d45-9e1d-d47ea370c2e8.png",
    "30083357-1f72-443b-83a7-f0e68c2173e7.png",
    "4244bcfb-0352-4402-aa4f-b41138d352ff.png",
    "75cce2f8-dc5b-49f0-920f-d6082fa2756a.png",
    "36b6f5d3-7c9f-4490-8320-adbf333215d9.png",
  ];

  const images = await Promise.all(
    exploreImageKeys.map(async (obj) => {
      const params: GetObjectCommand = new GetObjectCommand({
        Bucket: bucket,
        Key: obj,
      });

      const url = await getSignedUrl(client, params, {
        expiresIn: 3600,
      });

      return {
        url: url,
        fileName: obj.split(".")[0] as string,
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
