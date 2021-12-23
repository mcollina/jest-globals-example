const foo = require('./foo')

test('read non existent file', async () => {
  const res = await foo('non-existent')
  expect(res).toBe('fail')
})

test('read this file', async () => {
  const res = await foo(__filename)
  expect(res).toBe('success')
})
