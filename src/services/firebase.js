import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

let db;
export const courseCollectionName = 'courses';

export const getDb = () => {
  if (!db) {
		const app = initializeApp({
			apiKey: process.env.REACT_APP_API_KEY,
			authDomain: process.env.REACT_APP_AUTH_DOMAIN,
			projectId: process.env.REACT_APP_PROJECT_ID,
			storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
			messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
			appId: process.env.REACT_APP_APP_ID,
			measurementId: process.env.REACT_APP_MEASUREMENT_ID,
		});
		db = getFirestore(app);
	}

	return db;
}

export const saveOrder = async (cart) => {
	getDb();

	const collectionRef = collection(db, "orders");
	const response = await addDoc(collectionRef, {cart});
	console.log("Orden creada correctamente", response.id);

  	return response.id;
};