const { codegen } = require('./controller');

module.exports = (app) => {
  app.post('/pincode/', codegen);
  app.get('/loaderio-e8eea5d3c4c7426094c9c870a318f234', (req, res) => { res.status(200).send('loaderio-e8eea5d3c4c7426094c9c870a318f234') });
};
