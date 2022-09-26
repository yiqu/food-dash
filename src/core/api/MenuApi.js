// eslint-disable-next-line no-unused-vars
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { fireDatabase } from '../../Firebase';


export const menuRef = collection(fireDatabase, "menu");

export const getFullMenu = async () => {
  const querySnapshot = await getDocs(menuRef);
  const res = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};
