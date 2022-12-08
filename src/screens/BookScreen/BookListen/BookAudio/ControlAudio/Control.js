import { View, Text } from "react-native";
import React from "react";

export async function selectAudio(nameAudio, audio, setAudio, source) {
  if (audio.status === null) {
    console.log("start");
    const sound = audio.playbackObj;
    console.log(sound);

    console.log("Loading Sound");
    const status = await sound.loadAsync(source, {
      shouldPlay: true,
      progressUpdateIntervalMillis: 1000,
    });
    // console.log(status)
    console.log("Playing Sound");

    return setAudio({
      name: nameAudio,
      playbackObj: sound,
      status: status,
      playing: true,
    });
  }
}

export async function pause(audio, setAudio) {
  if (audio.status.isLoaded && audio.status.isPlaying) {
    console.log("Audio is already playing.");
    const status = await audio.playbackObj.setStatusAsync({
      shouldPlay: false,
    });
    console.log("Audio is already pause.");

    return setAudio({
      ...audio,
      status: status,
      playing: false,
    });
  }
}

export async function resume(audio, setAudio) {
  if (audio.status.isLoaded && !audio.status.isPlaying) {
    console.log("Audio is already paused.");
    const status = await audio.playbackObj.setStatusAsync({
      shouldPlay: true,
      rate: 1,
    });
    console.log("Audio is already playing.");
    return setAudio({
      ...audio,
      status: status,
      playing: true,
    });
  }
}

export async function stopAudio(audio, setAudio) {
  if (audio.status.isLoaded && !audio.status.isPlaying) {
    console.log("Audio is already.");
    const status = await audio.playbackObj.stopAsync();
    console.log("Audio is already out.");
    return setAudio({
      ...audio,
      // status: null
      status: null,
      playing: false,
    });
  }
}

export async function endAudio(audio, setAudio) {
  if (audio.status.isLoaded) {
    try {
      console.log("end");
      await audio.playbackObj.stopAsync();
      const status = await audio.playbackObj.unloadAsync();
      return setAudio({
        ...audio,
        status: null,
        playing: true,
      });
    } catch {
      console.log("Err inside end audio");
    }
  }
}

export function transformTime(value) {
  return new Date(value).toISOString().substr(14, 5);
}

export function valueThumb(duration) {
  if (duration.positionDuration !== null && duration.lengthDuration !== null) {
    return duration.positionDuration / duration.lengthDuration;
  }

  return 0;
}

export async function prevStep(audio, setAudio, duration, setDuration) {
  console.log(duration.positionDuration);
  let value =
    duration.positionDuration - 15000 > 0
      ? duration.positionDuration - 15000
      : 0;
  setDuration({ ...duration, positionDuration: value });
  await audio.playbackObj.setPositionAsync(value);
}

export async function nextStep(audio, setAudio, duration, setDuration) {
  console.log(duration.positionDuration);
  let value =
    duration.positionDuration + 15000 < duration.lengthDuration
      ? duration.positionDuration + 15000
      : duration.lengthDuration;
  setDuration({ ...duration, positionDuration: value });
  await audio.playbackObj.setPositionAsync(value);
}

export function Control() {
  return (
    <View>
      <Text>Control</Text>
    </View>
  );
}

// export async function playSound(audio, setAudio, source) {

//   if (audio.status === null) {
//     // const sound = new Audio.Sound()
//     const sound = audio.playbackObj
//     console.log(sound)

//     console.log('Loading Sound');
//     const status = await sound.loadAsync( source, {shouldPlay: true})
//     // console.log(status)
//     console.log('Playing Sound');

//     // await audio.playbackObj.setOnPlaybackStatusUpdate(upDateStatus)
//     // sound.getStatusAsync
//     // status.durationMillis
//     return setAudio({
//       playbackObj: sound,
//       status: status,
//       playing: true
//     })
//   }
//   // Stop
//   if (audio.status.isLoaded && audio.status.isPlaying) {
//     console.log("Audio is already playing.")
//     const status = await audio.playbackObj.setStatusAsync({ shouldPlay: false })
//     console.log("Audio is already paused.")

//     return setAudio({
//       ...audio,
//       status: status,
//       playing: false
//     })
//   }
//   // Resume
//   if (audio.status.isLoaded && !audio.status.isPlaying) {
//     console.log("Audio is already paused.")
//     const status = await audio.playbackObj.setStatusAsync({ shouldPlay: true, rate: 1 })
//     console.log("Audio is already playing.")
//     return setAudio({
//       ...audio,
//       status: status,
//       playing: true
//     })
//   }
// }
