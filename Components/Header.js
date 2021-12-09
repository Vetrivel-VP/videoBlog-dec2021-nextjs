import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Flogo.png?alt=media&token=f8038ccb-49f6-4fad-859c-1b53cae70575"
        alt=""
        className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] ml-0 lg:ml-[30px] "
        id="logo"
      />

      {/* search Box */}
      <div
        className="bg-searchBar h-[40px] flex items-center overflow-hidden px-2 ml-20 
      sm:hidden md:flex"
        id="searchBox"
      >
        <Search className="text-gray-400" />
        <input
          type="text"
          className="w-full h-full bg-transparent rounded-lg text-textColor outline-none border-none placeholder-gray-400 px-2"
          placeholder="Search"
        />
      </div>

      <div
        className="ml-auto flex items-center justify-evenly h-[40px] 
        sm:w-[75%] md:w-[50%] lg:w-[25%] "
        id="profileContainer"
      >
        <IconButton className="lg:mx-4">
          <Settings className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <IconButton className="lg:mx-4">
          <Notifications className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <div className="flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fportrait.jpg?alt=media&token=287a4599-200f-4720-94b5-b6a06c72c349"
            alt=""
            className="rounded-full w-[40px] h-[40px] object-cover"
          />
          <p className="text-textColor text-[16px] font-bold ml-2">
            Vetrivel Ravi{" "}
            <span className="block text-[12px] text-gray-500">
              Product Designer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
