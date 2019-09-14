## A Simple Tool for Cloud Firestore and Firebase Realtime Database.

### Setup Connection
```js
const { Firebase } = require('firestore-db');

const firebase = new Firebase({
	projectId: '',
	clientEmail: '',
	privateKey: ''
});
```

### Realtime Database
```js
const db = firebase.database();
```

### Cloud Firestore
```js
const db = firebase.firestore();
```