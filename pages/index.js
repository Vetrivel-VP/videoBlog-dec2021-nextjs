import {
  AllInclusive,
  CheckCircle,
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
import Head from "next/head";
import Banner from "../Components/Banner";
import MenuContainer from "../Components/MenuContainer";

export default function Home() {
  return (
    <div className="grid place-items-center overflow-hidden">
      <Head>
        <title>Streame - Video Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="container"
        className="w-screen h-screen bg-mainBg flex overflow-hidden"
      >
        {/* sidebar */}

        <div
          id="sideBar"
          className="flex flex-col flex-[.12] border-r border-borderColor py-5"
        >
          <div id="logo" className="px-5 flex  items-center">
            <h2 className="text-primary text-[24px] font-bold">Streame</h2>
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

        <div className="flex flex-col flex-[.64]">
          <Banner />
        </div>

        {/* Right Bar */}
        <div className="flex flex-col flex-[.24] bg-red-400"></div>
      </div>
    </div>
  );
}
