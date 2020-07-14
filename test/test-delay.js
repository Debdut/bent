'use strict'
const bent = require('../')
const assert = require('assert')
const tsame = require('tsame')

const test = it

const same = (x, y) => assert.ok(tsame(x, y))

const baseurl = 'https://echo-server.mikeal.now.sh/src'
const u = path => baseurl + path

test('Wait 2s', async () => {
  const request = bent('string')
  const str = await request(u('/echo.js?body=ok'), null, {}, 2000, () => console.log('Waiting 2s'))
  same(str, 'ok')
})