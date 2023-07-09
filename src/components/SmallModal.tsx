import  { useEffect, useRef } from "react";
import { SmallModals } from "./interfaces/interface";

function SmallModal({
  
  setShowSmallModal,
  isChecked,
  setActiveItem,
  activeItem,
}: SmallModals) {
  const modalRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowSmallModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    console.log("Item clicked: " + activeItem);
  };

  let dark = isChecked
    ? "bg-[#1F1F1F] text-white shadow-purple-800"
    : "bg-[#ffff] text-black shadow-stone-600";

  return (
    <div
      className={`absolute z-10 rounded-lg  p-6 -ml-10 cursor-pointer  w-40 ${dark} `}
    >
      <ul ref={modalRef} className="grid gap-4 list-none p-0">
        <li
          className={activeItem === "Sans Serif" ? "text-purple" : ""}
          onClick={() => handleItemClick("Sans Serif")}
        >
          Sans Serif
        </li>
        <li
          className={activeItem === "Serif" ? "text-purple" : ""}
          onClick={() => handleItemClick("Serif")}
        >
          Serif
        </li>
        <li
          className={activeItem === "Mono" ? "text-purple" : ""}
          onClick={() => handleItemClick("Mono")}
        >
          Mono
        </li>
      </ul>
    </div>
  );
}

export default SmallModal;
