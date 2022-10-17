import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCopy = path.join(__dirname, "/files", "dontLookAtMe.txt");

export const copy = async () => {
  try {
    await fs.copyFile(
      fileToCopy,
      path.join(__dirname, "/files", "copiedFile.txt")
    );

    const readFile = await fs.readFile(path.join(__dirname, "/files", "copiedFile.txt"), {
      encoding: "utf8",
    });

    readFile && console.log("Contents:", readFile)
  } catch (e) {
    console.log('Something went wrong')
    throw e;
  }
};

copy();
