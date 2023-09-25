import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
    return user;
  });
};

export const registerDB = async ({ email, password, displayName }) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );

    const newUser = await updateUserProfile({ displayName });

    return newUser;
  } catch (error) {
    console.log("registerDBERROR", error);
    throw error;
  }
};

export const loginDB = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.log("loginDBERROR", error);
    throw error;
  }
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateProfile(user, update);

      const { email, displayName, uid, photoURL } = user;

      return { email, displayName, uid, photoURL };
    } catch (error) {
      throw error;
    }
  }
};

export const Login = (data) => {
  const users = data.users;

  const user = users.find((item) => item.email === data.data.email);

  if (!user) {
    return null;
  }
  if (String(data.data.password) !== String(user.password)) {
    return null;
  }

  return { email: user.email, login: user.login, url: user.url };
};

export const LogOut = () => {
  return null;
};
export const Registration = (data) => {
  const users = data.users;
  const user = users.find((item) => item.email === data.data.email);
  if (user) {
    return null;
  }
  return data.data;
};

export const addUser = (data) => {
  return data;
};

export const addPost = async (data) => {
  const { id, currentUser, locationImage, inputName, pathUri } = data;

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      id,
      currentUser,
      locationImage,
      inputName,
      pathUri,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
  return data;
};
export const deleteAllPosts = () => {
  return null;
};

export const getPostId = (id) => {
  return id;
};

export const addComments = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "comments"), data);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }

  return data;
};
export const deleteAllComments = () => {
  return null;
};

export const getPostsDB = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));

    let posts = [];
    snapshot.forEach((doc) => posts.push(doc.data()));

    return posts;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export const getCommentsDB = async () => {
  try {
    const snapshot = await getDocs(collection(db, "comments"));

    let comments = [];
    snapshot.forEach((doc) => comments.push(doc.data()));

    return comments;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadImage = async (uri, name) => {
  try {
    const filename = name || uri.split("/").pop();

    const response = await fetch(uri);
    const file = await response.blob();
    const avatarRef = ref(storage, `images/${filename}`);
    await uploadBytes(avatarRef, file);
    return await getDownloadURL(avatarRef);
  } catch (error) {
    console.log(error);
  }
};

export const uploadAvatar = async (uri, name) => {
  try {
    const filename = name || uri.split("/").pop();

    const response = await fetch(uri);
    const file = await response.blob();
    const avatarRef = ref(storage, `avatar/${filename}`);
    await uploadBytes(avatarRef, file);
    return await getDownloadURL(avatarRef);
  } catch (error) {
    console.log(error);
  }
};

export const getUsersDB = async () => {
  try {
    const snapshot = await getDocs(collection(db, "auth"));

    let users = [];
    snapshot.forEach((doc) => users.push(doc.data()));

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
