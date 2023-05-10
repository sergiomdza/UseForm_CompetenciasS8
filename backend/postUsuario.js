import { db } from "../firebaseConfig";
import { doc, setDoc, addDoc, collection} from "firebase/firestore";

export default async function postUsuario({name, lastName, id}) {
    // Add a new document in collection "cities"
    if(!id){
        await addDoc(collection(db, "usuarios"), {
            name,
            lastName
          });
    } else {
        await setDoc(doc(db, "usuarios", id), {
            name,
            lastName
        });
    }
}