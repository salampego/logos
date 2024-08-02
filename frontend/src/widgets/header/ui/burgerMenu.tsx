import { HashLink } from "react-router-hash-link";
import { Icon } from "shared/IconSvg/iconSvg";

export const BurgerMenu = () => {
  return (
    <div className=" tl:hidden ">
      <HashLink to="/#1" className="flex flex-col-reverse items-center ">
        <p className="font-GilroySemibold text-xs">MENU</p>
        <Icon name="menu" className="w-7 h-5" />
      </HashLink>
    </div>
  );
};
