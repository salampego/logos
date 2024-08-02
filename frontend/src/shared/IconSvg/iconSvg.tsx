import clsx from "clsx";
import type { SVGProps } from "react";

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
      <use href={`src/assets/svg/svgSprite.svg#${name}`}></use>
    </svg>
  );
};
