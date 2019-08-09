const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const nuxtConfig = require('./nuxt.config')
const app = express()

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: '.nuxt'
}
const nuxt = new Nuxt(config)

app.get('*', (req, res) => {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  nuxt.renderRoute('/').then(result => {
    res.send(result.html)
  }).catch(e => {
    res.send(e)
  })
})

exports.ssrapp = functions.https.onRequest(app)
