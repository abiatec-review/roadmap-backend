import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
  try {
    const isFileExists =
      !fs.existsSync(path.join(__dirname, "/files", "/wrongFilename.txt")) ||
      fs.existsSync(path.join(__dirname, "/files", "/properFilename.md"));

    if (isFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.promises.rename(
      path.join(__dirname, "/files", "/wrongFilename.txt"),
      path.join(__dirname, "/files", "/properFilename.md")
    );
  } catch (e) {
    throw e;
  }
};

rename();
