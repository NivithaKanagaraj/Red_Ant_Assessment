import firebase from "firebase";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBi40kkVtbzZynReGBrMpxyNkuQFsI2xjU",
	authDomain: "gatepass-1f549.firebaseapp.com",
	projectId: "gatepass-1f549",
	storageBucket: "gatepass-1f549.appspot.com",
	messagingSenderId: "856264990072",
	appId: "1:856264990072:web:49710e945463a7573dfc8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
