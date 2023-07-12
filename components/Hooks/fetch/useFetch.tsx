import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Utils/Firebase/Firebase";
import { DueDate } from "../../Popup/Popup";

export interface Task {
  id: string;
  title?: string;
  dueDate?: DueDate;
  priority?: string;
  description?: string;
  uid?: string | null;
}

const useFetch = (collectionName: string) => {
  const [data, setData] = React.useState<Task[]>([]);
  React.useEffect(() => {
    onSnapshot(collection(db, collectionName), (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc?.id })));
    });
  }, []);

  return data;
};

export default useFetch;
