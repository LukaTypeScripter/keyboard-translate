import { useState } from "react";
import { logo, iconArrowDown, moon } from "../assets";
import { HeaderProps } from "./interfaces/interface";
import SmallModal from "./SmallModal";
import Search from "./Search";
function Header(p: HeaderProps) {
  const { toggleChecked, isChecked, setWord, setActiveItem, activeItem } = p;
  const [showSmallModal, setShowSmallModal] = useState(false);
  return (
    <header className="ps-5 pe-5 max-w-4xl pt-6 ms-auto me-auto">
      <div className="flex justify-between gap-[1.625rem] items-center ">
        <span>
          <img src={logo} alt="" />
        </span>

        <div className="ml-auto border-r-2 ">
          <div
            className="relative flex items-center justify-end gap-5 w-max-[8.5rem] pb-5 
        pl-1 pr-5 mr-2 capitalize cursor-pointer ml-2 mt-4
        "
          >
            <span>{activeItem}</span>
            <img
              src={iconArrowDown}
              alt=""
              className="w-[14px] h-[8px]"
              onClick={() => setShowSmallModal(!showSmallModal)}
            />
          </div>
          {/**TODO:PopUp Modal */}
          {showSmallModal && (
            <SmallModal
              showSmallModal={showSmallModal}
              setShowSmallModal={setShowSmallModal}
              isChecked={isChecked}
              setActiveItem={setActiveItem}
              activeItem={activeItem}
            />
          )}
        </div>
        <div className="flex">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={!isChecked ? false : true}
            />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-purple peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-purple peer-checked:bg-purple"
              onClick={toggleChecked}
            ></div>
          </label>
          <img src={moon} alt="" onClick={toggleChecked} />
        </div>
      </div>
      {/**search*/}
      <Search isChecked={isChecked} setWord={setWord} />
    </header>
  );
}

export default Header;
