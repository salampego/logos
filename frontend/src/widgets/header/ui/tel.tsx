import { Icon } from "shared/IconSvg/iconSvg";

export const Tel = () => {
  return (
    <div className="lg:hidden flex items-center mr-5">
      <div className="bg-secondary w-[32px] h-[32px] rounded-full flex justify-center items-center mr-3 p-2 ">
        <Icon name="tel" className="w-[16px] h-[16px] " />
      </div>
      <div className="w-28">
        <p className="text-textSecondary">Contacts: </p>
        <p>(607) 224-4008</p>
      </div>
    </div>
  );
};
