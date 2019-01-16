"use strict";
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/questionsboard'; //mlab connection string here
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-questionsboard';
exports.PORT = process.env.PORT || 4747;
// two options here. either put your mlab connection string on line 2
// OR - use dotenv package, which I will illustrate now.
// can you provide me your mlab connection string?