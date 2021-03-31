import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
export const firebaseInit = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	} else {
		firebase.app();
	}
};

const userInfo = (info) => {
	const { displayName, email, photoURL, uid, emailVerified } = info?.user;
	const UserInfo = {
		isLoggedIn: true,
		name: displayName,
		email: email,
		image: photoURL,
		uuid: uid,
		emailVerified: emailVerified,
	};
	return UserInfo;
};

export const joinGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			return userInfo(res);
		})
		.catch((err) => {
			return err;
		});
};
