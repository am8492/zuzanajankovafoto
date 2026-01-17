import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: "",
    });

    return NextResponse.json(
      blobs.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
      }))
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load photos" },
      { status: 500 }
    );
  }
}
