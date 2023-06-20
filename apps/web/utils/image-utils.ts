import * as path from "path";
import * as fs from "fs";

const PREFIX_SVG = 'data:image/svg+xml;base64,';
const PREFIX_PNG = 'data:image/png;base64,';

const base64Image = (dir: string) => {
  const fullPath = path.join(process.cwd(), 'public' , dir);
  return fs.readFileSync(fullPath).toString('base64');
}

export const getImageFullPath = (dir: string) => {
  return path.join(process.cwd(), 'public' , dir);
}

export const readSvg = (dir: string) => {
  return `${PREFIX_SVG}${base64Image(dir)}`
}

export const readPng = (dir: string) => {
  return `${PREFIX_PNG}${base64Image(dir)}`
}