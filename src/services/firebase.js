// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore,query,where,addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa9Z6rAt-u1cv3D4MEfPiSwqizTwTgF4g",
    authDomain: "tiendawebcoder.firebaseapp.com",
    projectId: "tiendawebcoder",
    storageBucket: "tiendawebcoder.appspot.com",
    messagingSenderId: "215212883472",
    appId: "1:215212883472:web:80098fd85f26fab82f9495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}

export const getOneProducts = async (idToSearch) => {
    const productsCollectionRef = collection(db, "products");
    const productRef = doc(productsCollectionRef, idToSearch);
    const snapshot = await getDoc(productRef);
    return { ...snapshot.data(), id: snapshot.id };
}

export const getProductsByCategory = async (categoryToSearch) => {
    const productsCollectionRef = collection(db, "products");
    const queryCollection = query(
        productsCollectionRef,
        where("category", "==", categoryToSearch)
    );
    const snapshot = await getDocs(queryCollection);
    const docsData = snapshot.docs.map((docu) => {
        return { ...docu.data(), id: docu.id };
    });
    return docsData;
}

export const createBuyOrder = async (order) => {
    const ordersCollectionRef = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollectionRef , order);
    return orderDoc.id;
}