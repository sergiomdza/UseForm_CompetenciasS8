import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function useGetData() {
  const [users, setusers] = useState(null);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const users = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        users.push({...data, "id": doc.id})
      });
      setusers(users);
    } catch (error) {
      console.log(error)
    }
  };

  return {
    users,
    getData,
  };
}