import { NextResponse } from "next/server";
import formidable from "formidable";
import { promises as fs } from "fs";
import path from "path";

// Disable the body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    // Define the upload directory
    const uploadDir = path.join(process.cwd(), "/public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    // Initialize formidable with 
    const form = formidable({
      uploadDir, // Directory to save uploaded files
      keepExtensions: true, // Retain file extensions
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = files.file;

    const fileUrl = `/uploads/${path.basename(file.filepath)}`;
    return NextResponse.json({ message: "File uploaded", url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ message: "File upload failed", error }, { status: 500 });
  }
}
