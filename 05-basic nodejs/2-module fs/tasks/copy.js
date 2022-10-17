import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderToCopy = path.join(__dirname, "/files");

export const copy = async () => {
  try {
    await fs.cp(folderToCopy, path.join(__dirname, "/files_copy"), {
      recursive: true,
    });

    const readFile = await fs.readdir(path.join(__dirname, "/files_copy"), {
      encoding: "utf8",
    });

    readFile && console.log("Contents:", readFile);
  } catch (e) {
    console.log("Something went wrong");
    throw e;
  }
};

copy();
