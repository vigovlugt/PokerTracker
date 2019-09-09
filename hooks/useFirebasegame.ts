import React, { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";

function useFirebaseGame() {
  const [game, setGame] = useState({});
  const [users, setUsers] = useState();

  const gameUpdate = (doc: firebase.firestore.DocumentSnapshot) => {
    console.log(doc);
    const data = doc.data();
    console.log(data);
    setGame(data);
  };

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDF7aPzCj4UUmQcUoMUJIsc1rZkfTxlFFQ",
      authDomain: "pokertracker-d2be7.firebaseapp.com",
      databaseURL: "https://pokertracker-d2be7.firebaseio.com",
      projectId: "pokertracker-d2be7",
      storageBucket: "",
      messagingSenderId: "1086050910004",
      appId: "1:1086050910004:web:519a52f8f11923f2e16f61"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // Setup realtime hooks
    firebase
      .firestore()
      .collection("Games")
      .doc("Game")
      .onSnapshot(gameUpdate);

    return () => {};
  });

  return [users, game];
}

export default useFirebaseGame;
