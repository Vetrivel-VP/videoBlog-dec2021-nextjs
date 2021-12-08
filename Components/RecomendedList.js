function RecomendedList({ imgSrc, videoName, artistName }) {
  return (
    <div className="flex items-center mb-2 cursor-pointer px-3 py-2 hover:bg-gray-900 duration-200 ease-in-out">
      <img
        src={imgSrc}
        alt=""
        className="min-w-[120px] min-h-[60px] w-[140px] h-[80px] rounded-lg object-cover "
      />

      <div className="flex flex-col ml-2  flex-1">
        <h3 className="text-textColor text-[16px]">
          {videoName}
          <span className="block text-[12px] font-bold text-gray-500">
            {artistName}
          </span>
        </h3>
        <div className="flex items-center  mt-2">
          <p className="text-[14px] font-bold text-gray-500">40:30</p>
          <p className="text-[14px] font-bold text-gray-500 ml-6">
            65,550 <span>views</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecomendedList;
