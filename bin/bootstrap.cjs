/**
 * Self-bootstrapping script for `js/scripts`. Importing this file triggers 2 side effects:
 *  1. Installs node_modules.
 *  2. Compiles TS to `dist`.
 * All scripts in `bin` should import this file then their own from `dist`.
 */

const { execSync } = require('child_process');

function execSyncAndLogOnFailure(cmd) {
  try {
    execSync(cmd, { cwd: __dirname });
  } catch (e) {
    console.error(`Error running ${cmd}.`);
    console.error(e);
    process.exit(1);
  }
}

execSyncAndLogOnFailure('SKIP_YARN_PLUGIN_CACHE_UPLOAD=1 yarn install');
execSyncAndLogOnFailure('rm -rf ../dist');
execSyncAndLogOnFailure('yarn build');
execSyncAndLogOnFailure('cp -r ../src/templates ../dist/templates');
