'use strict'

const express = require('express');
const app = express();

app.use(express.static('FrontMain'));

if(require.main === module) {
    app.listen(process.env.PORT || 4747, function() {
      console.info(`App is listening on ${this.address().port}`);
    });
}

module.exports = app;
