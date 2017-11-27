const field = require('sgt-fields');
const execFile = require('child_process').execFile;

const service = (() => {
  const getPincode = (dados, callback) => {
    let result = '';

    execFile(`${process.cwd()}/external/codegen`,
      [dados.code, dados.pdv, dados.nseq, dados.quantity], 
      (error, stdout, stderr) => {
        if (error) {
          console.log('stderr', stderr);
        }
        result = stdout.toUpperCase();
        callback(result)
    });
  };

  return {
    getPincode
  };
})();

module.exports = service;
