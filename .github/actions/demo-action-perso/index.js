import { createRequire } from "module";
const require = createRequire(import.meta.url);

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const myInput = core.getInput('my-input');
  console.log(`Hello ${myInput}!`);

  core.setOutput('my-output', `Hello ${myInput}!`);
} catch (error) {
  core.setFailed(error.message);
}
