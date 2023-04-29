import inquirer from 'inquirer';
import fs from 'fs';
import { createDirectoryContents } from './createDirectoryContents.js';
import { QUESTIONS } from './questions.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { editPackageJson } from './editPackageJson.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(answers => {
  const projectChoice = answers['project-choice'];
  const projectName = answers['project-name'];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);

  createDirectoryContents(templatePath, projectName);
  editPackageJson(projectName);
});
