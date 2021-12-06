function Banner() {
  return (
    <div className="grid place-items-center h-4/6 px-2 py-8 relative ">
      <div className="w-[100%] h-[100%] rounded-2xl bg-blue-500 overflow-hidden shadow-primaryShadow">
        <img
          src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
          alt=""
          className="w-full h-full object-cover filter grayscale"
        />
      </div>
    </div>
  );
}

export default Banner;
