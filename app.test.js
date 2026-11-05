const test = require('node:test');
const assert = require('node:assert');
const { handler } = require('./app');

test('responds with hello', () => {
  let body = '';
  handler({}, { end: (b) => (body = b) });
  assert.match(body, /Hello/);
});
