import { NextPage } from "next";
import firebase from "firebase";
import { useEffect, useState } from "react";
import useFirebaseGame from "../hooks/useFirebasegame";

const PokerTracker: NextPage = () => {
  const [users, game] = useFirebaseGame();

  return <div>{JSON.stringify(game, null, 2)}</div>;
};

export default PokerTracker;
