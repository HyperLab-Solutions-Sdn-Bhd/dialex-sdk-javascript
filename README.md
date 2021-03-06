# Dialex SDK for JavaScript  
JavaScript Client for HyperLab Dialex API  

[![Build Status](https://travis-ci.org/HyperLab-Solutions-Sdn-Bhd/dialex-sdk-javascript.svg?branch=master)](https://travis-ci.org/HyperLab-Solutions-Sdn-Bhd/dialex-sdk-javascript) [![Coverage Status](https://coveralls.io/repos/github/HyperLab-Solutions-Sdn-Bhd/dialex-sdk-javascript/badge.svg?branch=master)](https://coveralls.io/github/HyperLab-Solutions-Sdn-Bhd/dialex-sdk-javascript?branch=master) [![](https://data.jsdelivr.com/v1/package/npm/@hyperlab-solutions/dialex/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@hyperlab-solutions/dialex) [![Known Vulnerabilities](https://snyk.io/test/github/hyperlab-solutions-sdn-bhd/dialex-sdk-javascript/badge.svg)](https://snyk.io/test/github/hyperlab-solutions-sdn-bhd/dialex-sdk-javascript)  

## Install  

### Node

```js
$ npm install --save @hyperlab-solutions/dialex
```

### **Browser**

```html
<script src="https://cdn.jsdelivr.net/npm/@hyperlab-solutions/dialex/lib/dialex.min.js"></script>
```

## Quick Start

### NodeJS

```js
const Dialex = require('@hyperlab-solutions/dialex').Dialex;
const dialex = new Dialex('apiKey');
```

### Browser

```js
<script src="https://cdn.jsdelivr.net/npm/@hyperlab-solutions/dialex/lib/dialex.min.js"></script>
...
<script>
let dial = new dialex.Dialex('apiKey');
</script>
```  

## Developing  

Clone using git:  
`git clone git@github.com:HyperLab-Solutions-Sdn-Bhd/dialex-sdk-javascript.git`  

Install dependencies:  
`npm install`  

Testing during development:  
`npm run dev`  

To build for production:  
`npm run build`  

Run tests:  
`npm test`
