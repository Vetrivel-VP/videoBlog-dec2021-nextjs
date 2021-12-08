function Menu({ icon, name }) {
  return (
    <div className={`group relative flex items-center cursor-pointer`}>
      <i className="text-gray-500 scale-125 group-hover:text-textColor">
        {icon}
      </i>
      <div
        className="hidden group-hover:block  z-50  absolute left-10 bg-textColor px-4 py-1 rounded-md
              before:absolute before:w-[15px] before:h-[15px] before:rounded 
              before:rotate-45 before:bg-textColor before:left-[-5px] before:top-2
              
        "
      >
        <p className="text-mainBg">{name}</p>
      </div>
    </div>
  );
}

export default Menu;
