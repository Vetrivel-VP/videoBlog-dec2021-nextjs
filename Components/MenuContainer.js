function MenuContainer({ icon, menuName }) {
  return (
    <div
      className="group flex items-center py-3 px-6 cursor-pointer relative
                before:absolute before:w-[0px] before:h-3/6 before:bg-primary before:rounded-sm before:right-0
                hover:before:w-[2px] duration-150 ease-in-out"
    >
      <div className="text-[10px] text-textColor group-hover:text-primary">
        {icon}
      </div>
      <p className="text-[14px] text-textColor ml-3  group-hover:text-primary">
        {menuName}
      </p>
    </div>
  );
}

export default MenuContainer;
