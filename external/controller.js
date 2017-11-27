const field = require('sgt-fields');
const { getPincode } = require('./service');

const controller = (() => {
  const statusOk = 200;
  const statusBadRequest = 400;

  const codegen = (req, res) => {
    const body = field.get(req, 'body');
    getPincode(body, (pincode) => {
      console.log('dados: ', body);
      console.log('pincode: ', pincode);
  
      res.status(pincode === '' ? statusBadRequest : statusOk)
        .send(pincode === '' ? null : { pincode });
    });
    
  };

  return {
    codegen
  };
})();

module.exports = controller;
