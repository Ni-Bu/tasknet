import { React, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ReactComponent as MicroPhone } from "../img/microphone.svg";

const Dictaphone = ({ setTranscript, setValue }) => {
  const [micStatus, setMicStatus] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleClick = (e) => {
    resetTranscript();
    console.log(micStatus);
    if (!micStatus) {
      SpeechRecognition.startListening();
      setMicStatus(!micStatus);
    }
    if (micStatus) {
      SpeechRecognition.stopListening();

      setTranscript(transcript);
      // setValue(transcript);
      setMicStatus(!micStatus);
    }
  };
  return (
    <div>
      <MicroPhone
        onClick={handleClick}
        className={listening ? "mic-on" : "mic-off"}
      />
      {listening ? setValue(transcript) : resetTranscript}
    </div>
  );
};
export default Dictaphone;
