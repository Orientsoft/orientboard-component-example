const fs = require('fs-extra'),
      path = require('path')

const pkg = fs.readJsonSync(path.join(__dirname, 'package.json'))

module.exports = [
  {
    type: pkg.orientboard.name,
    h: 100,
    w: 100,
    x: 0,
    y: 0,
    rotate: 0,
    data: {},
  },
]
