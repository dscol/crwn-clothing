import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASyeMdQ0MHvIGQ4ZRd4jrCgBV4_mML4OY",
    authDomain: "crwn-clothing-6847b.firebaseapp.com",
    projectId: "crwn-clothing-6847b",
    storageBucket: "crwn-clothing-6847b.appspot.com",
    messagingSenderId: "1067983673055",
    appId: "1:1067983673055:web:dc826bcda6bc4665f5bb6a",
    measurementId: "G-K1472TYE3L"
}

// interface IUser {
//     userAuth: any | null,
//     additionalData?: any
// }

export const createUserProfileDocument = async (userAuth: any, additionalData?: any)=> {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;