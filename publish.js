

// npm version patch &&
//   ng build modal && cp ../../README.md ../../dist/modal && cd ../../dist/modal && npm publish

const version = process.argv[2] || null;
if (! version) {
  console.error('version required');
  process.exit();
}
const { promisify } = require('util');

const path = require('path');
const { spawn } = require( 'child_process' );
const spawnP = promisify(spawn);
const cwd = process.cwd();
const libSrc = path.join(cwd, 'projects', 'modal');
const libDst = path.join(cwd, 'dist', 'modal');
const licenseSrc = path.join(cwd, 'LICENSE');
const readmeSrc = path.join(cwd, 'README.md');
const date = new Date().toGMTString();
const writeFile = promisify(require('fs').writeFile);
const simpleGit = require('simple-git/promise')(cwd);
const defaultSpawnOpts = {
  cwd: undefined,
  env: process.env
};

writeFile(path.join(cwd, 'VERSION'), `${version} ${date}`)
  .then(() => simpleGit.add('-A'))
  .then(() => simpleGit.commit(`-a -m 'preparing clean release v${version}'`))
  .then(() => spawnP('npm version', [version], defaultSpawnOpts))
  .catch(console.error);


// const command = `cd ${cwd} && npm version ${version} && \
//                 cd ${libSrc} && npm version ${version} && \
//                 cd ${cwd} && ng build --prod --aot && ng build modal --prod && \
//                 cp ${licenseSrc} ${libDst} && cp ${readmeSrc} ${libDst} && \
//                 git add -A && git commit -m 'npm publish on ${date}' && \
//                 git tag v${version} -a -m 'release  v${version} on ${date}' && \
//                 git push origin master && git push origin v${version} && \
//                 cd ${libDst} && npm publish`;
// exec(command, (e, stdout, stderr) => {
//   if (e instanceof Error) {
//         console.error(e);
//         throw e;
//     }
//     console.log('stdout ', stdout);
//     console.log('stderr ', stderr);
// })
