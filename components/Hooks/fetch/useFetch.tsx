import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { UseAuth, db } from "../../Utils/Firebase/Firebase";
import { DueDate } from "../../Popup/Popup";

export interface Task {
  id: string;
  title?: string;
  dueDate?: DueDate;
  priority?: string;
  description?: string;
  uid?: string;
}

const useFetch = (collectionName: string) => {
  const currentUser = UseAuth();
  const [data, setData] = React.useState<Task[]>([]);

  React.useEffect(() => {
    onSnapshot(collection(db, collectionName), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  const filteredData = data.filter((item) => item.uid === currentUser?.uid);
  return filteredData;
};

export default useFetch;
