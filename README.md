# drossel-webstorage
Unneccesary web storage wrapper.

[![NPM](https://nodei.co/npm/drossel-webstorage.png)](https://nodei.co/npm/drossel-webstorage/)

## What is this?
"drossel-webstorage" is a module for easier use of the WebStorage.  
It does not affect the other namespace.  
(Note: It has been implemented by the ES2015.)

## Install
step1: npm install
```
npm install drossel-webstorage
```

step2: import and create instance
```
const Storage = require('drossel-webstorage');
const exampleStorage = new Storage('somethingNamespace');
```

## Usage

### Class (namespace, isSessionStorage = false)
```
const fooLocalStorage = new Storage('foo');
const barSessionStorage = new Storage('bar', true);
```

### save(key, value = null)
```
exampleStorage.save('aaa', 111);
exampleStorage.save('bbb', {xxx: 222});
```

### load(key)
```
exampleStorage.load('aaa'); // return 111
exampleStorage.load('bbb'); // return {xxx: 222}
```

### loadAll()
```
exampleStorage.loadAll(); // return {aaa: 111, bbb: {xxx: 222}}
```

### exists(key)
```
exampleStorage.exists('aaa'); // return true
exampleStorage.exists('ccc'); // return false
```

### remove(key)
```
exampleStorage.remove('bbb'); // return null
```

### removeAll()
```
exampleStorage.removeAll(); // return null
```
