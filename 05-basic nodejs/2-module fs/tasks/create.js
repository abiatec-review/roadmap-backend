import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  try {
    const isFileExists = fs.existsSync(
      path.join(__dirname, "/files", "/fresh.txt")
    );

    if (!isFileExists) {
      fs.writeFile(
        path.join(__dirname, "/files", "/fresh.txt"),
        "I am fresh and young",
        { encoding: "utf-8" },
        () => console.log("File created")
      );
    }

    console.log("File already exists");
  } catch (e) {
    throw e;
  }
};

create();
