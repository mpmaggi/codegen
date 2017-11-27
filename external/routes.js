const { codegen } = require('./controller');

module.exports = (app) => {
  app.post('/pincode/', codegen);
};
