import path from "path";
import React from "react"; 


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