import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyCWMXUoeACDuUY06Oh5gOj5bzNmTkuAosA',
  authDomain: 'wily-project-4b159.firebaseapp.com',
  projectId: 'wily-project-4b159',
  storageBucket: 'wily-project-4b159.appspot.com',
  messagingSenderId: '765427819207',
  appId: '1:765427819207:web:73efa1be89e56995c754e2',
};
// Initialize Firebase
// if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
// }

export default firebase.firestore();
