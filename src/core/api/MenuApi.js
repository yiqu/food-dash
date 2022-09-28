// eslint-disable-next-line no-unused-vars
import { collection, doc, setDoc, getDocs, getDoc } from "firebase/firestore"; 
import { fireDatabase } from '../../Firebase';


export const menuRef = collection(fireDatabase, "menu");
//export const welcomeRef = doc(fireDatabase, "welcome", "uYvVP7o6Y1RtmUrmjP2F");
export const welcomeRef = collection(fireDatabase, "welcome");

export const createCollectionDbRef = (pathArray) => {
  return collection(fireDatabase, ...pathArray);
};

export const getCollection = async (pathArray) => {
  const querySnapshot = await getDocs(createCollectionDbRef(pathArray));
  const res = [];
  querySnapshot.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};

export const getFullMenu = async () => {
  const querySnapshot = await getDocs(createCollectionDbRef(['menu']));
  const res = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};


export const getWelcomeMessageArray = async (pathArray) => {
  const querySnapshot = await getDocs(createCollectionDbRef(pathArray));
  const messageArray = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    messageArray.push(
      doc.data().motd,
      doc.data().motd2
    );
  });
  return messageArray;
};


