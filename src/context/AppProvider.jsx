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
  const [nameAudio, setNameAudio] = useState("");
  const [playing, setPlaying] = useState(false);

  async function setNewPlayBackObj(playbackObj) {
    return setPlayBackObj(playbackObj);
  }

  async function setNewNameAudio(nameAudio) {
    return setNameAudio(nameAudio);
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
        nameAudio: nameAudio,
        playing: playing,
        setNewNameAudio: setNewNameAudio,
        setNewPlayBackObj: setNewPlayBackObj,
        setNewPlayBackStatus: setNewPlayBackStatus,
        setNewPlaying: setNewPlaying,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
