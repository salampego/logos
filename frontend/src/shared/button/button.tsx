import clsx from "clsx";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  classname?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, classname, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "bg-secondary hover:opacity-60 transition-opacity",
        classname
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
