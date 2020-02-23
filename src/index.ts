import { setFailed } from '@actions/core';
import getFileInfo from './getFileInfo';
import inputs from './inputs';
import prepareOutput from './prepareOutput';
import generateIndex from './generateIndex';
import generateFiles from './generateFiles';

try {
  const [fileInfos] = await Promise.all([
    getFileInfo({
      folder: inputs.inputDir,
      root: process.cwd()
    }),
    prepareOutput()
  ]);
  generateIndex(fileInfos);
  generateFiles(fileInfos);
} catch (e) {
  setFailed(`Action failed with ${e}`);
}