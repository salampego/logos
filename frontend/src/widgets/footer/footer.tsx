import { Icon } from "shared/IconSvg/iconSvg";

export const Footer = () => {
  return (
    <footer className="container py-6 flex items-center justify-around sm:justify-center border-solid border-t-2 border-opacity-5 border-text">
      <div className="flex-col ">
        <Icon name="logo" className="h-6 min-w-24" />
        <div className="mt-3 flex flex-col  justify-center sm:items-center">
          <p className="font-GilroyMedium text-xs mb-4">
            © LLC SC "APSHERON" All rights reserved. 2010-2020
          </p>

          <p className="underline decoration-1  font-GilroyMedium text-sm mb-2">
            User Agreement
          </p>
          <p className="underline decoration-1  font-GilroyMedium text-sm mb-2">
            <a href="#map">Site Map</a>
          </p>
          <p className="underline decoration-1  font-GilroyMedium text-sm">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="flex sm:hidden">
        <p className="mr-5 font-GilroyMedium text-xl">About the Restaurant</p>
        <p className="mr-5 font-GilroyMedium text-xl">Delivery Terms</p>
        <p className="font-GilroyMedium text-xl">Return Policy</p>
      </div>
    </footer>
  );
};
