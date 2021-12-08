import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from "@mui/icons-material";
import Head from "next/head";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RecomendedList from "../Components/RecomendedList";

export default function Home() {
  return (
    <div className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden">
      <Head>
        <title>Streame - Video Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex w-full h-full">
        {/* Left Menu */}
        <div className="w-[6%] min-w-[60px] h-full flex flex-col items-center justify-evenly">
          <Menu icon={<Dashboard />} name={"Dashboard"} />
          <Menu icon={<VideogameAsset />} name={"Games"} />
          <Menu icon={<LocalMovies />} name={"Movies"} />
          <Menu icon={<Stream />} name={"Streamer"} />
          <Menu icon={<TrendingUp />} name={"Statistics"} />
          <Menu icon={<Chat />} name={"Messages"} />
          <Menu icon={<Favorite />} name={"Favourite"} />
          <Menu icon={<Logout />} name={"Logout"} last={true} />
        </div>

        {/* Main Container */}
        <div className="w-[94%] h-full  flex flex-col">
          {/* top  list */}
          <div className="w-full h-[70%] max-h-[480px]  grid grid-cols-3 gap-2 p-2">
            <div class="lg:col-span-2 sm:col-span-6 bg-primary rounded-lg overflow-x-hidden"></div>
            <div
              class="lg:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
              scrollbar scrollbar-thin scrollbar-thumb-gray-800
            "
            >
              <p className="text-textColor text-[18px] font-bold my-2 px-2">
                Recommended
              </p>

              {/* List item */}
              <RecomendedList
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fportrait.jpg?alt=media&token=287a4599-200f-4720-94b5-b6a06c72c349"
                }
                videoName={"Special B-Day Podcast"}
                artistName={"Susan Stewart"}
              />
            </div>
          </div>
          {/* bottom List */}
          <div className="w-full h-[30%] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}
