const firebaseAdmin = require('firebase-admin');

class Firebase {
	constructor(option) {
		if (!option) throw new Error('cannot make a connection without credentials');
		if (!option.projectId || !option.clientEmail || !option.privateKey) {
			throw new Error('cannot make a connection without "projectId", "clientEmail", "privateKey"');
		}

		const firebaseApp = firebaseAdmin.initializeApp({
			credential: firebaseAdmin.credential.cert({
				projectId: option.projectId,
				clientEmail: option.clientEmail,
				privateKey: option.privateKey.replace(/\\n/g, '\n')
			}),
			databaseURL: option.databaseURL || `https://${option.projectId}.firebaseio.com`
		});

		this.firebase = firebaseApp;
	}

	firebaseApp() {
		return this.firebase;
	}

	database() {
		return this.firebase.database();
	}

	firestore() {
		return this.firebase.firestore();
	}
}

module.exports = Firebase;
