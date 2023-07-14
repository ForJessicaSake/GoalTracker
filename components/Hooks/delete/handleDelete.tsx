import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";

export const handleDelete = async (id: string, collectionName: string) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
  setTimeout(() => {
    toast.success("deleted successfully!");
  });
};
