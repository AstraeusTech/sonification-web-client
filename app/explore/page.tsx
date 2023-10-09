/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Thumbnail {
  url: string;
  fileName: string;
}

async function getThumbnails() {
  const data = await fetch(`${process.env.API_URL}/api/thumbnails`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });

  return data;
}

export default async function Explore() {
  const data: Thumbnail[] = await getThumbnails();

  return (
    <div className="container pt-24">
      <h1 className="text-3xl font-bold mb-4">Latest Uploads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((image, index) => (
          <Link href={image.fileName ?? ""} key={`model-${index}`}>
            <div className="h-52 w-52 shadow-xl mx-auto overflow-hidden">
              <img
                className="rounded-lg rounded-lg object-cover h-full w-full"
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
