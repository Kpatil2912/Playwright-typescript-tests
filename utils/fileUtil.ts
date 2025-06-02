import * as fs from 'fs';

export function readJSON(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

export function readJSONDataFortestCase(filePath: string, testCaseName: string) {
  const data = readJSON(filePath);
  return data[testCaseName];
}
