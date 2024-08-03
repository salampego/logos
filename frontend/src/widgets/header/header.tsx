import { useCallback, useState } from "react";

import { Icon } from "shared/IconSvg/iconSvg";
import { Button } from "shared/button/button";

import { SearchBar } from "./ui/searchBar";
import { Tel } from "./ui/tel";
import { BurgerMenu } from "./ui/burgerMenu";
import { Modal } from "entities/modal/modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "features/basket/module/selectors";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);
  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <header className="container  flex justify-center items-center  lg:flex-col   lg:py-2  lg:sticky lg:top-0 lg:z-30 bg-primary py-6">
        <Link to="/" className="order-first">
          <Icon
            name="logo"
            className="h-6 min-w-24 tl:mr-5 lg:px-5 lg:hidden fill-text "
          />
        </Link>

        <div className="flex items-center lg:mb-5 lg:w-full lg:justify-between">
          <BurgerMenu />
          <Link to="/">
            <Icon
              name="logo"
              className="h-6 w-24 tl:mr-5 lg:px-5 tl:hidden fill-text"
            />
          </Link>
          <Tel />
          {totalQuantity <= 0 ? (
            <Button
              type="button"
              classname="px-4 lg:py-1 min-h-[52px] flex lg:flex-col justify-center items-center lg:justify-between shadow-text rounded-xl"
              onClick={openModal}
            >
              <>
                <p className="font-GilroyMedium">Basket</p>
                <span className="lg:hidden w-px h-8 bg-text opacity-30  mx-3"></span>
                <span className="tl:hidden w-full h-px bg-text opacity-30  my-2"></span>
                <Icon name="basket" className="w-[24px] h-[24px]" />
              </>
            </Button>
          ) : (
            <Link
              to="/basket"
              className="bg-secondary tl:w-40  rounded-xl hover:opacity-60 transition-opacity px-4 lg:py-1 min-h-[52px] flex lg:flex-col justify-center items-center lg:justify-between shadow-text"
            >
              <p className="font-GilroyMedium">Basket</p>
              <span className="lg:hidden w-px h-8 bg-text opacity-30  mx-3"></span>
              <span className="tl:hidden w-full h-px bg-text opacity-30  my-2"></span>
              <p className="bg-text text-[#000] py-1 px-2 rounded-full font-GilroySemibold">
                {totalQuantity}
              </p>
            </Link>
          )}
        </div>
        <SearchBar />
      </header>

      {showModal ? <Modal closeModal={closeModal} /> : null}
    </>
  );
};
