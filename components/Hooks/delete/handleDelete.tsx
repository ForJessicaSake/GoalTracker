import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";

export const handleDelete = async (id: string) => {
    const docRef = doc(db, "goals", id);
    await deleteDoc(docRef);
    setTimeout(() => {
      toast.success("goal deleted successfully!");
    });
  };
  