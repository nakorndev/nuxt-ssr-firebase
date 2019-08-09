const fs = require('fs')
const _ = require('lodash')

const functionsPackage = require('./package.json')
const srcPackage = require('../src/package.json')

async function mapPackage (cb) {
  try {
    _.assignIn(functionsPackage.dependencies, srcPackage.dependencies)
    _.assignIn(functionsPackage.devDependencies, srcPackage.devDependencies)
    await fs.writeFileSync('./package.json', JSON.stringify(functionsPackage, null, 2), 'utf-8')
  } catch (error) {
    console.error(error)
  }
  cb()
}

exports.mapPackage = mapPackage
