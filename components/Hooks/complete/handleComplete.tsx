import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";

export const handleComplete = async (
  description: string,
  uid: string | number,
  title: string,
  priority: string,
  id: string,
  collectionName:string,
  database:string
) => {
  try {
    const collectionRef = collection(db, database);
    const payload = {
      uid: uid,
      time: serverTimestamp(),
      description: description,
      priority: priority,
      title: title,
    };
    await addDoc(collectionRef, payload);
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    toast.success("Yay, you rock!")
  } catch (err: any) {
    toast.error("An unexpected error occurred")
  }
};