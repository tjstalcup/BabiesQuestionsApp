const express = require('express');
const app = express();
app.use(express.static('FrontMain'));
app.listen(process.env.PORT || 4747);
