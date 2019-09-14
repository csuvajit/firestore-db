### Simple tool for cloud firestore and firebase realtime database.

### Setup Connection
```js
const { Firebase } = require('firestore-db');

const firebase = new Firebase({
	projectId: '', // ID of the Google Project
	clientEmail: '', // Client Email of Firebase SDK
	privateKey: '' // Private Key of Firebase SDK
});

// Private Key and Client Email
// https://console.firebase.google.com/u/0/project/<projectID>/settings/serviceaccounts/adminsdk
```

### Realtime Database
```js
const db = firebase.database();
```

### Cloud Firestore
```js
const db = firebase.firestore();
```