import { useLayoutEffect, useState } from "react";

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const throttle = (func: (...args: unknown[]) => void, delay: number) => {
  let lastCall = 0;
  return (...args: unknown[]) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

export const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<string>("");

  useLayoutEffect(() => {
    const listener = throttle(() => {
      // console.log("Listener called");
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      // console.log(`Scroll: ${scroll}, Active ID: ${position?.id}`);

      setActiveId(position?.id || "");
    }, 100);

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};
