import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HashLink } from "react-router-hash-link";
import { Icon } from "shared/IconSvg/iconSvg";

const modalRoot = document.querySelector("#modal-root")!;

interface IModalProps {
  closeModal: () => void;
}

export const Modal = ({ closeModal }: IModalProps) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [closeModal]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-searchColor bg-opacity-80"
    >
      <div className="max-w-calc max-h-calc relative">
        <button className="absolute top-4 right-5" onClick={closeModal}>
          <Icon name="dagger" className="w-5 h-5" />
        </button>
        <div className="bg-primary px-20 py-5 rounded-lg flex justify-center items-center flex-col">
          <Icon name="empty-basket" className="w-16 h-20" />
          <p className="font-GilroySemibold text-3xl mb-10 mt-5">
            BASKET EMPTY
          </p>
          <HashLink
            to="/#1"
            className="bg-secondary  rounded-xl hover:opacity-60 transition-opacity  flex justify-center items-center  p-3"
            onClick={closeModal}
          >
            <p className="text-sm font-GilroySemibold">View menu</p>
          </HashLink>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
