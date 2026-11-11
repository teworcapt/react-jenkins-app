
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getGreeting } from './greeting.js';

test("returns a greeting with the user's name", () => {
    assert.equal(getGreeting('Tewo'), 'Hello, Tewo!');
});

test('returns a default greeting when the name is empty', () => {
    assert.equal(getGreeting(''), 'Hello, Guest!');
});
