import {
  AllInclusive,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Cottage,
  FormatListBulleted,
  LiveTv,
  LocalMovies,
  Logout,
  Map,
  RestartAlt,
  Settings,
  TrendingUp,
  Tv,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Head from "next/head";
import Banner from "../Components/Banner";
import MenuContainer from "../Components/MenuContainer";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>Streame - Video Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="container"
        className="w-screen h-screen bg-mainBg flex min-w-[650px] overflow-hidden"
      >
        {/* sidebar */}

        <div
          id="sideBar"
          className="flex flex-col  border-r border-borderColor py-5
          flex-[.08]  lg:flex-[.12] sm:overflow-hidden
          
          "
        >
          <div id="logo" className="flex  items-center justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Flogo.png?alt=media&token=81be9551-febf-407d-b18f-6a8909399676"
              alt=""
              className="w-8  md:w-10 lg:w-14"
            />
          </div>

          {/* Menu Containers */}
          <div className="mt-5 flex flex-col flex-1">
            {/* first Menu */}
            <div className="border-b border-borderColor">
              <MenuContainer icon={<Cottage />} menuName={"Home"} />
              <MenuContainer icon={<TrendingUp />} menuName={"Trending"} />
              <MenuContainer icon={<Map />} menuName={"Discover"} />
            </div>
            {/* first Menu Ends */}

            {/* Recent Menu */}
            <div className="border-b border-borderColor">
              <MenuContainer icon={<RestartAlt />} menuName={"Recent"} />
              <MenuContainer
                icon={<FormatListBulleted />}
                menuName={"Anime List"}
              />
            </div>
            {/* Recent Menu Ends */}

            {/* Other Menu */}
            <div className="border-b border-borderColor">
              <MenuContainer icon={<AllInclusive />} menuName={"On Going"} />
              <MenuContainer icon={<CheckCircle />} menuName={"Completed"} />
              <MenuContainer icon={<Tv />} menuName={"TV Series"} />
              <MenuContainer icon={<LocalMovies />} menuName={"Movies"} />
              <MenuContainer icon={<LiveTv />} menuName={"Live Action"} />
            </div>
            {/* Other menu ends */}

            {/* Last Menu */}
            <div className="mt-[25px]">
              <MenuContainer icon={<Settings />} menuName={"On Going"} />
              <MenuContainer icon={<Logout />} menuName={"Completed"} />
            </div>
            {/* Last menu ends */}
          </div>
        </div>

        {/* main container */}

        <div className="flex flex-col flex-1 md:flex-[.64]">
          <Banner />

          <div>
            {/* top Section */}
            <div>
              <p>On Going</p>
              <div>
                <IconButton>
                  <ChevronLeft />
                </IconButton>
                <IconButton>
                  <ChevronRight />
                </IconButton>
              </div>
            </div>

            {/* Movei List Container */}
          </div>
        </div>

        {/* Right Bar */}
        <div className="flex flex-col flex-[.15] md:flex-[.24]  bg-red-400"></div>
      </div>
    </div>
  );
}
