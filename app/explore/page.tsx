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
    "a33025de-eeb9-4606-aec2-8af102753913.png",
    "7d08332b-37a1-4524-9238-b93e48b939d4.png",
    "1344cc81-5835-4340-bf74-1de400d881f6.png",
    "94039711-3b8b-4884-a67c-5e8dcba2e490.png",
    "06db2ad9-9c4e-4a80-9174-56a7e71d2646.png",
    "3cb4ac06-9874-4999-9781-f733b263d36a.png",
    "a9bf22cd-242f-4834-8ed5-5be817544583.png",
    "bd48df5e-ee40-4669-8b33-57ef6acf1210.png",
    "84a0579b-e34e-4e70-a736-e662b2956790.png",
    "1250ccf8-2b15-4290-87e4-962e5d352c90.png",
    "36b6f5d3-7c9f-4490-8320-adbf333215d9.png",
    "75cce2f8-dc5b-49f0-920f-d6082fa2756a.png",
    "4244bcfb-0352-4402-aa4f-b41138d352ff.png",
    "30083357-1f72-443b-83a7-f0e68c2173e7.png",
    "c896c43e-af06-4d45-9e1d-d47ea370c2e8.png",
    "fa68de26-4cd3-4054-abd5-6cae6f66f090.png",
    "cee9be4c-6152-403d-9bf9-8fbf95d8e91b.png",
    "sun.png",
    "star-cluster.png",
    "asteroid.png",
  ]

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
    <div className="container pt-20">
      <h1 className="text-3xl font-bold mb-4">Our Currated Collection</h1>
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
