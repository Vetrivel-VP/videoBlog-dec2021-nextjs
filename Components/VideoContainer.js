import { useState, useEffect } from "react";
import { TimelineLite } from "gsap";

function VideoContainer({ data }) {
  const [isPlaying, SetPlaying] = useState(false);
  const tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    if (isPlaying) {
      tl.fromTo("#videoName", { y: 0, opacity: 1 }, { y: -20, opacity: 0 });
    } else {
      tl.fromTo("#videoName", { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
    }
  }, [isPlaying, data]);
  return (
    <div className="relative w-full h-full" id="videoContainer">
      <video
        onPlay={() => SetPlaying(true)}
        onPause={() => SetPlaying(false)}
        className=" min-w-full min-h-full w-auto h-auto bg-cover"
        controls
        src={data.videoSrc}
        id="mainVideo"
      ></video>
      <div
        className="absolute top-0 left-0 z-10 w-full h-[40px] p-2
            bg-gradient-to-b from-black to-transparent
        "
        id="videoName"
      >
        <h2 className=" text-textColor text-xl">{data.name}</h2>
      </div>
    </div>
  );
}

export default VideoContainer;
