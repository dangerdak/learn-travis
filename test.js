const test = require('tape');
const shot = require('shot');
const handler = require('./handler');

test('Initialise', (t) => {
  t.pass('Tape running OK');
  t.end()
});

test('Home route', (t) => {
  shot.inject(handler, { method: 'get', url: '/' }, (res) => {
    t.equal(response.statusCode, 200, 'should respond with status code of 200');
    t.end();
  });
});
