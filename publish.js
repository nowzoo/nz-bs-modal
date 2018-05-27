

// npm version patch &&
//   ng build modal && cp ../../README.md ../../dist/modal && cd ../../dist/modal && npm publish


const version = process.argv[2] || null;
if (! version) {
  console.error('version required');
  process.exit();
}
const path = require('path');
const { exec } = require( 'child_process' );
const cwd = process.cwd();
const libSrc = path.join(cwd, 'projects', 'modal');
const libDst = path.join(cwd, 'dist', 'modal');
const licenseSrc = path.join(cwd, 'LICENSE');
const readmeSrc = path.join(cwd, 'README.md');
const date = new Date().toGMTString();
const command = `cd ${cwd} && npm version ${version} && \
                cd ${libSrc} && npm version ${version} && \
                cd ${cwd} && ng build --prod --aot && ng build modal --prod && \
                cp ${licenseSrc} ${libDst} && cp ${readmeSrc} ${libDst}`;
exec(command, (e, stdout, stderr) => {
  if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    console.log('stderr ', stderr);
})
