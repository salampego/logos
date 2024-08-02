import { Icon } from "shared/IconSvg/iconSvg";
import { useState } from "react";

export const SearchBar = () => {
  const [address, setAddress] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const onClick = () => {
    console.log(address);
    setAddress("");
  };

  return (
    <div className="relative tl:mr-7 grow tl:order-first w-full">
      <Icon name="location" className="absolute w-6 h-6 top-3 left-3" />
      <input
        type="text"
        className="outline-none w-full min-h-[52px] bg-searchColor rounded-xl placeholder:font-GilroyRegular px-16"
        placeholder="Enter your shipping address"
        onChange={handleChange}
        value={address}
      />
      <button type="button" onClick={onClick}>
        <Icon name="search" className="absolute w-6 h-6 top-3 right-3" />
      </button>
    </div>
  );
};
