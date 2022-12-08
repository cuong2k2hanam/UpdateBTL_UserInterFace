import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Audio } from "expo-av";
import { Slider } from "@miblanchard/react-native-slider";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { AppContext } from "../../../../context/AppProvider";
import {
  selectAudio,
  pause,
  resume,
  stopAudio,
  endAudio,
  transformTime,
  valueThumb,
  prevStep,
  nextStep,
} from "./ControlAudio/Control";

export default function BookAudio({ mybook, style, playAudio }) {
  const context = useContext(AppContext);
  // const user = context.user;
  // const nameAudio = context.nameAudio;
  // const setNewNameAudio = context.setNewNameAudio;
  const playbackObj = context.playbackObj;
  // const setNewPlayBackObj = context.setNewPlayBackObj;
  // const playbackStatus = context.playbackStatus;
  // const setNewPlayBackStatus = context.setNewPlayBackStatus;
  // const playing = context.playing;
  // const setNewPlaying = context.setNewPlaying;
  // const onPlaybackStatusUpdate = context.onPlaybackStatusUpdate;

  const [audio, setAudio] = useState({
    name: null,
    playbackObj: playbackObj,
    status: null,
    playing: null,
  });

  const [duration, setDuration] = useState({
    positionDuration: 0,
    lengthDuration: 0,
  });

  const [isThumbMoving, setIsThumbMoving] = useState(false);

  const [isPlayPre, setIsPlayPre] = useState(false);

  const [valueS, setValueS] = useState({
    value: null,
    new: false,
  });

  const onPlaybackStatusUpdate = async (playbackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      let x = playbackStatus.positionMillis;
      let y = playbackStatus.durationMillis;
      setDuration({
        ...duration,
        positionDuration: x,
        lengthDuration: y,
      });

      // setPlaybackStatus(playbackStatus);
    }

    // console.log(playbackStatus.isLoaded)
  };

  useEffect(() => {
    if (!playAudio) {
      endAudio(audio, setAudio);
    }
  }, [playAudio]);

  async function handlePlaySound() {
    console.log("click");
    if (audio.status === null && audio.name !== mybook.bookName) {
      console.log("Sach moi 1");
      await selectAudio(
        mybook.bookName,
        audio,
        setAudio,
        // require("../../../../audio/RoiToiLuon-Nal-7064237.mp3")
        { uri: mybook.bookAudio }
      );
      // await setNewNameAudio(mybook.bookName);
      // await setNewPlayBackObj(audio.playbackObj);
      // await setNewPlaying(!audio.playing);
      // await setNewPlayBackStatus(audio.playbackStatus);
      await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      // console.log(audio.playing)
    } else if (audio.name !== mybook.bookName) {
      console.log("Sach moi 2");
      await endAudio(audio, setAudio);
      await selectAudio(
        mybook.bookName,
        audio,
        setAudio,
        // require("../../../../audio/RoiToiLuon-Nal-7064237.mp3")
        { uri: mybook.bookAudio }
      );
      // await setNewNameAudio(mybook.nameAudio);
      // await setNewPlayBackObj(audio.playbackObj);
      // await setNewPlaying(!audio.playing);
      // await setNewPlayBackStatus(audio.playbackStatus);
      await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    } else {
      console.log("Sach cũ");
      console.log(audio.playing);
      audio.playing
        ? await pause(audio, setAudio)
        : await resume(audio, setAudio);

      // await setNewPlayBackObj(audio.playbackObj);
      // await setNewPlaying(!audio.playing);
      // await setNewPlayBackStatus(audio.playbackStatus);
      // console.log(audio.playing)
    }
  }

  console.log("AudioName: " + audio.name);

  {
    console.log(audio.name + ": " + audio.playing);
  }
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: mybook.bookCover.uri }} style={styles.imgAudio} />
      <Text
        style={{
          color: "#0080FF",
          fontWeight: "bold",
          fontSize: 16,
          padding: 12,
        }}
      >
        {mybook.bookName}
      </Text>
      <Text
        style={{
          color: "#0064C7",
          fontSize: 10,
          padding: 0,
        }}
      >
        {mybook.bookAuthor}
      </Text>
      <View style={styles.sliderContainer}>
        <Text>{transformTime(duration.positionDuration)}</Text>
        <View style={styles.slider}>
          <Slider
            // value={valueThumb(duration)}
            value={valueS.new ? valueS.value : valueThumb(duration)}
            // setDuration({...duration, positionDuration: value * duration.lengthDuration})
            onValueChange={async (value) => {
              console.log(Math.floor(value * duration.lengthDuration));
              setValueS({
                ...valueS,
                value: value,
                new: true,
              });
              setDuration({
                ...duration,
                positionDuration: value * duration.lengthDuration,
              });
              // await playbackObj.setPositionAsync(value * duration.lengthDuration)
            }}
            onSlidingStart={async () => {
              setIsThumbMoving(true);
              setIsPlayPre(audio.playing);
              // if (audio.playing) {
              //   try {
              //     console.log('pause')
              //     await pause(audio, setAudio)
              //   } catch (error) {
              //     console.log("Error when moving thumb: " + error.mesage)
              //   }
              // }
            }}
            onSlidingComplete={async () => {
              setIsThumbMoving(false);
              // if(isPlayPre) {
              //   try {
              //     await resume(audio, setAudio)
              //   } catch (error) {
              //     console.log("Error when have moved thumb: " + error.mesage)
              //   }
              // }
              await playbackObj.setPositionAsync(
                valueS.value * duration.lengthDuration
              );
              setValueS({ ...valueS, new: false });
            }}
            // animateTransitions={true}
            // debugTouchArea={true}
            maximumTrackTintColor={"#fff"}
            minimumTrackTintColor={"#0080FF"}
            // thumbImage={require('../../images/avatar.webp')}
            // renderThumbComponent={() => <TestComponent />}
            // renderTrackMarkComponent={() => <TestComponent />}
            step={0.01}
            thumbStyle={isThumbMoving ? styles.thumbMoving : styles.thumb}
            thumbTintColor={"#19538C"}
            // thumbTouchSize={{width: 55, height: 55}}
            // trackMarks={[1, 2, 3]}
            // value={[1, 2, 3]}
            // trackStyle={{backgroundColor: 'red'}}
            // minimumTrackStyle={{backgroundColor: 'red'}}
            style={styles.slider}
          />
        </View>
        <Text>{transformTime(duration.lengthDuration)}</Text>
      </View>
      <View style={styles.control}>
        <AntDesign
          name="banckward"
          size={24}
          color="black"
          onPress={async () =>
            await prevStep(audio, setAudio, duration, setDuration)
          }
        />
        <FontAwesome
          name={audio.playing ? "pause" : "play"}
          size={24}
          color="black"
          onPress={() => handlePlaySound()}
        />
        <AntDesign
          name="forward"
          size={24}
          color="black"
          onPress={async () =>
            await nextStep(audio, setAudio, duration, setDuration)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(225, 237, 255)",
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    // borderWidth: 2,
    flexDirection: "column",
  },
  imgAudio: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  sliderContainer: {
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    // justifyContent: 'center',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slider: {
    width: "80%",
    display: "flex",
    // borderWidth: 2
  },
  thumb: {
    width: 15,
    height: 15,
  },
  thumbMoving: {
    width: 20,
    height: 20,
  },
  control: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: "20%",
    paddingRight: "20%",
  },
});
