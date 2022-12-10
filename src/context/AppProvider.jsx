import { View, Text } from "react-native";
import React, { useState, createContext } from "react";
import { Audio } from "expo-av";

export const AppContext = createContext();
const AppProvider = (props) => {
  /**---------------Font----------------------------------------- */

  /**------------------------------------------------------------ */
  const [user, setUser] = useState("Dinh Cuong");
  const [playbackObj, setPlayBackObj] = useState(new Audio.Sound());
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [bookName, setBookName] = useState("Cuong");
  const [playing, setPlaying] = useState(false);

  async function setNewPlayBackObj(playbackObj) {
    return setPlayBackObj(playbackObj);
  }

  async function setNewBookName(bookName) {
    return setBookName(bookName);
  }

  async function setNewPlaying(playing) {
    return setPlaying(playing);
  }

  async function setNewPlayBackStatus(playbackStatus) {
    return setNewPlayBackStatus(playbackStatus);
  }

  return (
    // playbackObj.setPositionAsync()

    <AppContext.Provider
      value={{
        user: user,
        playbackObj: playbackObj,
        playbackStatus: playbackStatus,
        bookName: bookName,
        playing: playing,
        setBookName: setNewBookName,
        setNewPlayBackObj: setNewPlayBackObj,
        setNewPlayBackStatus: setNewPlayBackStatus,
        setPlaying: setNewPlaying,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
