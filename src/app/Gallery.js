import path from "path";
import React from "react"; // <-- Add this line

export async function getStaticProps() {
  const photosDirectory = path.join(process.cwd(), "public", "photos");

  const filenames = fs.readdirSync(photosDirectory);

  const photos = filenames.map((filename) => ({
    original: `photos/${filename}`,
  }));

  return {
    props: {
      photos,
    },
  };
}

export default function Index({ photos = [] }) {
  return (
    <div>
      {photos.length > 0 ? (
        photos.map((photo, index) => <p key={index}>{photo}</p>)
      ) : (
        <p>No photos found </p>
      )}
    </div>
  );
}
