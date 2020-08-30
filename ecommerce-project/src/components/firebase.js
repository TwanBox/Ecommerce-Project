import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCxutUjQLma9wcy8mJcL7GAtIT_03c9JGE',
  authDomain: 'ecommerce-project-twan.firebaseapp.com',
  databaseURL: 'https://ecommerce-project-twan.firebaseio.com',
  projectId: 'ecommerce-project-twan',
  storageBucket: 'ecommerce-project-twan.appspot.com',
  messagingSenderId: '1062318694544',
  appId: '1:1062318694544:web:7d58897f5496b2ec58f815',
  measurementId: 'G-MVDCNGT0ZN',
});

const auth = firebase.auth();

export default auth;
