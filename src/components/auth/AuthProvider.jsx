import React, { useEffect, useState } from "react";
import { AuthContext } from "../../../utils/AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../ui/Loading";
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      console.log("Error", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.log("Error", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = async () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubtribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubtribe();
  }, []);

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("Error", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const handelToggleColor = () => {
    setColor(!color);
  };

  const userInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithGithub,
    handelToggleColor,
    color,
    setColor,
    logOut,
    loading,
    user,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
