import { PlayArrow, Star } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

function Banner() {
  return (
    <div className="grid place-items-center h-4/6 px-2 py-8 relative ">
      <div className="w-[100%] h-[100%] rounded-2xl  overflow-hidden shadow-primaryShadow">
        <img
          src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
          alt=""
          className="w-full h-full object-cover filter grayscale opacity-[.2]"
        />
      </div>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2F1.png?alt=media&token=b1ec8b04-ad16-45fc-aef2-36aa3a5996ae"
        alt=""
        className="absolute  w-[300px] sm:w-6/12 lg:w-[320px]  left-[5%] top-0"
      />

      <div className="p-2 absolute right-0 w-6/12 h-full flex flex-col justify-center items-start">
        <h2 className="text-textColor text-[18px] font-bold">
          Season 1 .<span className="text-primary"> 2020</span>
        </h2>
        <h1 className="text-[35px] font-extrabold text-white">Demon Slayer</h1>
        <div className="flex my-2">
          <Star className="mx-1 text-starGold" />
          <Star className="mx-1 text-starGold" />
          <Star className="mx-1 text-starGold" />
          <Star className="mx-1 text-starGold" />
        </div>
        <p className="text-[14px] text-gray-100">
          Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and
          illustrated by Koyoharu Gotouge
        </p>
        <Button className="group px-4 py-2 bg-red-400 my-4 hover:bg-white duration-300 ease-in-out">
          <PlayArrow className="text-white ml-[-5px] group-hover:text-red-600 " />{" "}
          <p className="text-white ml-2 group-hover:text-red-600">Watch</p>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
