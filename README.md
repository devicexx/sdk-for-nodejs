# devicexx-sdk [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> sdk of device++ for node

## Installation

```sh
$ npm install --save devicexx-sdk
```

## Usage

```js
var dxx = require('devicexx-sdk');

dxx.init({
  baseUrl: 'http://api.devicexx.com:4567',
  prefix: '/v1',
  access_key: 'your-access-key',
  access_secret: 'your-access-secret'
});

// register
var data = {
  username: 'your-username',
  password: 'your-password'
}
dxx.register(data, function(error, response, body) {
  // do something after register
});

// token / bindingList / unbinding 
// the same to up 'register'
```
## License

MIT © [Vankia IoT Inc.](www.vankia.cn)


[npm-image]: https://badge.fury.io/js/sdk-for-nodejs.svg
[npm-url]: https://npmjs.org/package/devicexx-sdk
[travis-image]: https://travis-ci.org/devicexx/sdk-for-nodejs.svg?branch=master
[travis-url]: https://travis-ci.org/devicexx/sdk-for-nodejs
[daviddm-image]: https://david-dm.org/devicexx/sdk-for-nodejs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/devicexx/sdk-for-nodejs
[coveralls-image]: https://coveralls.io/repos/devicexx/sdk-for-nodejs/badge.svg
[coveralls-url]: https://coveralls.io/r/devicexx/sdk-for-nodejs
