import clsx from "clsx";
import type { SVGProps } from "react";
import svg from "assets/svg/svgSprite.svg";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  return (
    <svg
      className={clsx(
        "select-none fill-current inline-block text-inherit box-content",
        className
      )}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`${svg}#${name}`}></use>
    </svg>
  );
};
