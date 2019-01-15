"use strict";
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/questionsboard';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-questionsboard';
exports.PORT = process.env.PORT || 4747;
