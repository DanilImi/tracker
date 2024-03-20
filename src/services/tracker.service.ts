import fs from "fs";
import path from "path";
import { transpileModule, ModuleKind } from "typescript";

const getTracker = async () => {
  try {
    console.log("get Tracker...");
    const filePath = path.join(__dirname, "..", "tracker", "tracker.ts");
    const readFile = fs.readFileSync(filePath, "utf8");
    const transpilerFile = transpileModule(readFile, {
      compilerOptions: { module: ModuleKind.CommonJS },
    });
    return transpilerFile.outputText;
  } catch (err) {
    console.error("Error get tracker file:", err);
    return false;
  }
};

export { getTracker };
