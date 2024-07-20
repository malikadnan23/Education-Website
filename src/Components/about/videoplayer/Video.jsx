import "./videoplayer.css";
import video from "../../../assets/video.mp4";
import { useRef } from "react";

const Video = ({ play, setplay }) => {
  const player = useRef(null);
  const closeplayer = (e) => {
    if (e.target === player.current) {
      setplay(false);
    }
  };

  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      ref={player}
      onClick={closeplayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Video;
