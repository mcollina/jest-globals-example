const fs = require('fs/promises');

module.exports = async function (file) {
  try {
    await fs.readFile(file, 'utf8')
    return 'success'
  } catch (err) {
    if (err instanceof Error) {
      return 'fail'
    }
    throw err
  }
}

if (require.main === module) {
  module.exports(process.argv[2]).then(console.log)
}
