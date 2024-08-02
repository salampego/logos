import { Button } from "shared/button/button";
import { Icon } from "shared/IconSvg/iconSvg";

export const Contacts = () => {
  return (
    <div className="bg-primary rounded-xl absolute z-10 bottom-10 left-6 p-5 sm:static">
      <p className="font-GilroySemibold text-3xl pb-3">Contacts</p>
      <div className="border-xl">
        <div className="py-3 border-solid border-y-2 border-y-searchColor">
          <div className="flex">
            <Icon name="marker" className="fill-secondary w-6 h-6" />
            <div className="ml-2">
              <p className="text-textSecondary font-GilroyMedium">
                Our address:
              </p>
              <p className="font-GilroyMedium">
                10 Downing Street, London, United Kingdom
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <Icon name="message" className="fill-secondary w-6 h-6" />
            <div className="ml-2">
              <p className="text-textSecondary font-GilroyMedium">Our email:</p>
              <p className="font-GilroyMedium">auto.wash@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex pt-3 ">
          <Button type="button" classname="py-4 px-6 mr-5 sm:px-3">
            <p className="font-ProximaBold text-sm">RESERVE A TABLE</p>
          </Button>
          <div>
            <p className="font-GilroySemibold text-3xl">(607) 224-4008</p>
            <p className="text-textSecondary text-sm">
              Call or leave a request
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-around">
          <p className="font-GilroySemibold text-base">
            We are on social media:
          </p>
          <div className="justify-between">
            <a href="https://www.facebook.com/" className="mr-2">
              <Icon name="facebook" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/" className="mr-2">
              <Icon name="youtube" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/">
              <Icon name="instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
