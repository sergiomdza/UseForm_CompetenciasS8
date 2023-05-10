import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteUsuario({ id }) {
    console.log('Dentro: ', id);
    await deleteDoc(doc(db, "usuarios", id));
}