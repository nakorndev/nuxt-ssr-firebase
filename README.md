# nuxt-ssr-firebase

> A template of Nuxt.js project to deploy as SSR 💻 to Firebase 🔥.
>
> 🤪 I also need some people that has English stronger to re-write this guideline. Try to pull-request.

## Introduction

To use [Nuxt.js](https://nuxtjs.org/) with [Firebase](https://firebase.google.com/) this repository will guide you how to deploy quickly and with simple step.

## Step

- Clone this project
- Create a new Nuxt.js project by `npx create-nuxt-app src` or copy all of your main Nuxt.js work into `src` folder
- Edit `src/nuxt.config.js`
  - (Should) change `export default { ... }` to `module.exports = { ... }`
  - Add `extractCSS: true` to `build` section

Example of `src/nuxt.config.js`

```js
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  devModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
    extractCSS: true, // Add here!
    extend (config, ctx) {
    }
  }
}
```

- At `functions` directory use `npm install` to install a packages for [gulp.js](https://gulpjs.com/)
- At root directory
  - You may need to login by `firebase login` to authorization your Firebase project
  - Use `firebase use --add` to select your project (If `.firebaserc` is not setup)
  - Use `firebase deploy` to deploy

## Report issues

[https://github.com/nakorndev/nuxt-ssr-firebase/issues/new](https://github.com/nakorndev/nuxt-ssr-firebase/issues/new)

## Credit

- [https://itnext.io/how-to-create-a-ssr-serverless-app-with-firebase-nuxt-js-in-an-hour-6e6e03d0b3b8](https://itnext.io/how-to-create-a-ssr-serverless-app-with-firebase-nuxt-js-in-an-hour-6e6e03d0b3b8)
- [https://medium.com/likecoin/quick-nuxt-js-ssr-prototyping-with-firebase-cloud-functions-5277553610a8](https://medium.com/likecoin/quick-nuxt-js-ssr-prototyping-with-firebase-cloud-functions-5277553610a8)
