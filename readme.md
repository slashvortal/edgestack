# Advanced Boilerplate<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status][ci-img]][ci] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[ci-img]: https://travis-ci.org/sebastian-software/advanced-boilerplate.svg?branch=master
[ci]: https://travis-ci.org/sebastian-software/advanced-boilerplate
[deps]: https://david-dm.org/sebastian-software/advanced-boilerplate
[deps-img]: https://david-dm.org/sebastian-software/advanced-boilerplate.svg
[npm]: https://www.npmjs.com/package/advanced-boilerplate
[npm-downloads-img]: https://img.shields.io/npm/dm/advanced-boilerplate.svg
[npm-version-img]: https://img.shields.io/npm/v/advanced-boilerplate.svg

A NodeJS V6 Universal React Boilerplate with an Amazing Developer Experience.


## TOC

 - [About](https://github.com/sebastian-software/advanced-boilerplate#about)
 - [Features](https://github.com/sebastian-software/advanced-boilerplate#features)
 - [Overview](https://github.com/sebastian-software/advanced-boilerplate#overview)
 - [Project Structure](https://github.com/sebastian-software/advanced-boilerplate#project-structure)
 - [Server Runtime Dependencies](https://github.com/sebastian-software/advanced-boilerplate#server-runtime-dependencies)
 - [NPM Commands](https://github.com/sebastian-software/advanced-boilerplate#npm-script-commands)
 - [References](https://github.com/sebastian-software/advanced-boilerplate#references)


## About

This boilerplate contains an absolutely minimal set of dependencies in order to get you up and running with a universal react project as quickly as possible. It provides you with a great development experience that includes hot reloading of everything.



## Features

  - Server side rendering.
  - Extreme live development - hot reloading of client/server source as well as your _webpack configuration_, with high level of error tolerance.
  - Express server with a basic security configuration.
  - ReactJS as the view layer.
  - React Router as the router.
  - CSS Support with CSS modules and additional flexible full PostCSS chain for advanced transformations e.g. autoprefixer
  - Full ES2015 support, using `babel` to transpile where needed.
  - Bundling of both client and server using `webpack` v2.
  - Client bundle is automatically split by routes and uses tree-shaking (newly supported by `webpack` v2).
  - A development and optimized production configuration.
  - Easy environment configuration via `dotenv` files.
  - ESLint v3 integrated with sensible default configuration.


## Overview

Data persistence, test frameworks, and all the other bells and whistles have been explicitly excluded from this boilerplate. It's up to you to decide what technologies you would like to add to your own implementation based upon your own needs, this boilerplate simply serves as a clean base upon which to do so.

This boilerplate uses Webpack 2 to produce bundles for both the client and the
server code. You will notice two Webpack configuration files that allow you to target the respective environments:

   - `webpack.client.config.js`
   - `webpack.server.config.js`

Both of these then call into the `webpackConfigFactory.js` in order to generate their respective webpack configurations. I've tried to keep the webpack configuration as centralized and well documented as possible as it can be a confusing topic at times.

My reasoning for using webpack to bundle both the client and the server is to bring greater interop and extensibility to the table. This will for instance allowing server bundles to handle React components that introduce things like CSS or Images (as and when you add the respective loaders).

Given that we are bundling our server code I have included the `source-map-support` module to ensure that we get nice stack traces when executing our code via node.

All the source code is written in ES2015, and I have explicitly kept it to the true specification (bar JSX syntax). As we are following this approach it is unnecessary for us to transpile our source code for the server into ES5, as `node` v6 has native support for almost all of the ES2015 syntax. Our client (browser) bundle is however transpiled to ES5 code for maximum browser/device support.

The application configuration is supported by the `dotenv` module and it requires you to create a `.env` file in the project root (you can use the `.env_example` as a base). The `.env` file has been explicitly ignored from git as it will typically contain environment sensitive/specific information. In the usual case your continuous deployment tool of choice should configure the specific `.env` file that is needed for a target environment.



## Project Structure

```
/
|- build // The target output dir for our build commands.
|  |- client // The built client module.
|  |- server // The built server module
|
|- src  // All the source code
|  |- server // The server specific source
|  |- client // The client specific source
|  |- shared // The shared code between the client/server
|
|- .env_example // An example from which to create your own .env file.
|- devServer.js // Creates a hot reloading development environment
|- webpack.client.config.js // Client target webpack configuration
|- webpack.server.config.js // Server target webpack configuration
|- webpackConfigFactory.js  // Webpack configuration builder
```



## Server Runtime Dependencies

Even though we are using webpack to support our universal application we keep the webpack runtime out of our production runtime environment. Everything is prebundled in prep for production execution. Therefore we only have the following runtime dependencies:

  - `node` v6
  - `compression` - Gzip compression support for express server responses.
  - `express` - Web server.
  - `helmet` - Provides a content security policy for express.
  - `hpp` - Express middleware to protect against HTTP Parameter Pollution attacks.
  - `react` - A declarative, efficient, and flexible JavaScript library for building user interfaces.
  - `react-dom` - React support for the DOM.
  - `react-router` - A complete routing library for React.
  - `serialize-javascript` - A superset of JSON that includes regular expressions and functions.
  - `source-map-support` - Adds source map support to node.js (for stack traces).


## NPM Commands

### `npm run development`

Starts a development server for both the client and server bundles. We use `react-hot-loader` v3 to power the hot reloading of the client bundle, whilst a filesystem watch is implemented to reload the server bundle when any changes have occurred.

### `npm run build`

Builds the client and server bundles, with the output being production optimized.

### `npm run start`

Executes the server. It expects you to have already built the bundles either via the `npm run build` command or manually.

### `npm run clean`

Deletes any build output that would have originated from the other commands.



## Troubleshooting

___Q:___ __I see `react-router` warnings during hot reloading.__

For example:

```
Warning: [react-router] You cannot change <Router history>;
Warning: [react-router] You cannot change <Router routes>;
```

Fret not! This is a known issue when using React Hot Loader 3 alongside React Router. It is being looked in to. Everything still works, unfortunately you just get a few warnings alongside your changes. They are harmless though, promise. :)



## References

  - __Webpack 2__ - https://gist.github.com/sokra/27b24881210b56bbaff7
  - __React Hot Loader v3__ - https://github.com/gaearon/react-hot-boilerplate/pull/61
  - __dotenv__ - https://github.com/bkeepers/dotenv



## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/s15e-javascript/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2016<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
