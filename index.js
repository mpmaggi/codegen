const ROOT_PATH = process.cwd();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const env = process.env.NODE_ENV;

const jobCommand = require(`${ROOT_PATH}/external/routes`);

let serverProcess;

app.use(helmet());
app.use(bodyParser.json({
  type: '*/*'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

jobCommand(app);

serverProcess = app.listen(rocess.env.PORT || 2609, () => {
  console.log('Express server listening on port: %s', serverProcess.address().port);
});

