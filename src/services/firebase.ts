import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyA_-dJV93PjB4qfdA2s2jDKQsYEhPj86iY",
  authDomain: "projeto-react-e6e02.firebaseapp.com",
  databaseURL: "https://projeto-react-e6e02-default-rtdb.firebaseio.com",
  projectId: "projeto-react-e6e02",
  storageBucket: "projeto-react-e6e02.appspot.com",
  messagingSenderId: "1073287941845",
  appId: "1:1073287941845:web:ed9a09e402f04be6aa9c5c"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}