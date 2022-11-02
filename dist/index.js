
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./planby-jb.cjs.production.min.js')
} else {
  module.exports = require('./planby-jb.cjs.development.js')
}
