require('dotenv').config();

const app = require('./server');
require('./database');

// Server is listening
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  //console.log('Environment:', process.env.NODE_ENV);
});