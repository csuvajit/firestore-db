const firebase = require('firebase-admin');

class Firebase {
	constructor(option) {
		if (!option) throw new Error('cannot make a connection without credentials');
		if (!option.projectId || !option.clientEmail || !option.privateKey) {
			throw new Error('cannot make a connection without "projectId", "clientEmail", "privateKey"');
		}

		const firebaseApp = firebase.initializeApp({
			credential: firebase.credential.cert({
				projectId: option.projectId,
				clientEmail: option.clientEmail,
				privateKey: option.privateKey.replace(/\\n/g, '\n')
			}),
			databaseURL: option.databaseURL || `https://${option.projectId}.firebaseio.com`
		});

		this.firebase = firebaseApp;
		this.realtime = firebaseApp.database();
		this.firestore = firebaseApp.firestore();
	}
}

module.exports = Firebase;
