React & Redux Boilerplate
=========================

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)

## Installation
```
$ git clone https://github.com/lordthorzonus/react-redux-boilerplate.git
$ cd react-redux-boilerplate
$ npm install
```

## Development
```
$ npm start
```
Runs the project in development mode with hot-reloading of `src` folder.
Open your browser at [http://localhost:3000](http://localhost:3000).

### Try
```
$ rm -rf node_modules
$ npm i
$ npm dev
```

## Clean
```
$ npm run clean
```
Using rimraf clean the `dist` folder, which is the target of the `build`

## Build
```
$ npm run build
```

the use of history push api requires that all your requests point to index.html
since react-router is keeping track of the navigation (e.g this can be done with `.htaccess` file at the web root or with `nginx` configuration)

## Run karma
```
$ npm test
```
