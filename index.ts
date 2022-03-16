import fs from "fs";
import path from "path";
import { ProjectConfig } from "./example-1/src/Projectconfig";
import projectConfig from "./example-1/src/atri.project.config";
const pathArray: string[] = [];
const itmesToLoop: (keyof ProjectConfig)[] = [
  "runtimes",
  "machines",
  "extensions",
  "compilers",
  "resolvers",
];
// loop through each element and append the corresponding paths to array
for (let x of itmesToLoop) {
  projectConfig[x].forEach((element: any) => {
    pathArray.push(element.path);
  });
}
const dirPath = path.join(
  process.cwd(),
  "example-1",
  "node_modules",
  pathArray[5]
);
const globaldirname = dirPath;
let jsonFile: any = {};
let indexFilePathRelative: string = "";
let indexFilePath: string = "";
const generateName = (dirPath: string, globaldirname: string) => {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    if (file === "package.json") {
      jsonFile = require(path.join(dirPath, file));
    } else if (file === "index.ts" || file === "index.js") {
      indexFilePath = path.join(dirPath, file);
      indexFilePathRelative = indexFilePath.split(globaldirname)[1];
    } else if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      generateName(path.join(dirPath, file), globaldirname);
    }
  });
  const output = `<${jsonFile.name}:${jsonFile.version}>${indexFilePathRelative}`;
  return output;
};
const filesInExample = fs.readdirSync(path.join(__dirname, "example-1"));
const outPutInfoArray: string[] = [];
pathArray.forEach((modulePath) => {
  //====================== itterate through each path======================
  let firstChart = modulePath.split("/")[0];
  let dirPath: string = "";
  if (filesInExample.includes(firstChart)) {
    // ============absolute path===============
    dirPath = path.join(__dirname, "example-1", modulePath);
  } else if (firstChart === ".") {
    // ============relative path===============
    dirPath = path.join(__dirname, "example-1", "src", modulePath);
  } else {
    // ============nodemodules path===============
    dirPath = path.join(__dirname, "example-1", "node_modules", modulePath);
  }
  // ==============globaldirname====================
  const globaldirname = dirPath;
  let jsonFile: any = {};
  let indexFilePathRelative: string = "";
  let indexFilePath: string = "";
  if (fs.existsSync(dirPath)) {
    // check if provided path exists or not
    outPutInfoArray.push(generateName(dirPath, globaldirname));
  } else {
    console.log(dirPath, "does not exists inside the exmaple-1");
  }
});
console.log(outPutInfoArray);
