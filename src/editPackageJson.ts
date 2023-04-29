import fs from 'fs';

const CURR_DIR = process.cwd();

export function editPackageJson(projectName: string) {
  fs.readFile(`${CURR_DIR}/${projectName}/package.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const packageJson = JSON.parse(data);
    packageJson.name = projectName;
    fs.writeFile(`${CURR_DIR}/${projectName}/package.json`, JSON.stringify(packageJson, null, 2), err => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
}
