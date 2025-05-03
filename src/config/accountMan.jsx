import {auth} from './firebase';

export const Student1 = async (email, password) => {
  try{
    await createUserWithEmailAndPassword(auth, email, password);

  } catch(error){
    console.log("Did not create");
  }
};

export const Student2 = async (email, password) => {
  try{
    await createUserWithEmailAndPassword(auth, email, password);

  } catch(error){
    console.log("Did not create");
  }
};