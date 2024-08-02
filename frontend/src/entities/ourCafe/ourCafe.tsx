import { Icon } from "shared/IconSvg/iconSvg";

export const OurCafe = () => {
  return (
    <section className="container bg-cover bg-center bg-norepeat bg-ourCafePattern py-20 flex items-center justify-around sm:hidden">
      <div className="max-w-md">
        <h3 className="font-GilroySemibold text-3xl mb-6">OUR CAFE</h3>
        <p className="font-GilroyRegular text-xl ">
          We are located in one of the most picturesque places in the city — on
          the riverbank. It's your oasis within the city limits, where you can
          escape from the noisy and dusty metropolis. We are truly unique
          because everything is thought out to the smallest detail: the project
          is built from wild Carpathian timber, a fireplace in the main hall of
          the restaurant and panoramic windows with a view of the river, cozy
          gazebos on the riverbank, the best scenic terrace, a pavilion seating
          200 people, a fairytale children's house, and a swimming pool.
        </p>
        <div className="rounded-lg bg-primary p-3 max-w-[220px] text-center mt-7 hover:opacity-80 transition-opacity border-white">
          <a href="#1" className="font-ProximaBold text-sm">
            VIEW MENU
          </a>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        <li className="p-10 bg-primary flex items-center flex-col  hover:text-secondary hover:fill-secondary opacity-90 transition-all ">
          <Icon name="onion" className="w-16 h-16 " />
          <p className="mt-4 ">Freshest Products</p>
        </li>
        <li className="p-10 bg-primary flex items-center flex-col hover:text-secondary hover:fill-secondary opacity-90 transition-all">
          <Icon name="delivery" className="w-16 h-16 " />
          <p className=" mt-4 ">Fast Delivery</p>
        </li>
        <li className="p-10 bg-primary flex items-center flex-col hover:text-secondary hover:fill-secondary opacity-90 transition-all">
          <Icon name="chef" className="w-16 h-16 " />
          <p className=" mt-4 ">Best Chefs</p>
        </li>
        <li className="p-10 bg-primary flex items-center flex-col hover:text-secondary hover:fill-secondary opacity-90 transition-all">
          <Icon name="onion" className="w-16 h-16 " />
          <p className=" mt-4 ">Freshest Products</p>
        </li>
      </ul>
    </section>
  );
};
