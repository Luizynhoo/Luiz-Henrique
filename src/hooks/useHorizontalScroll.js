import { useEffect } from "react";

export function useHorizontalScroll(ref) {
  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        elemento.scrollLeft += e.deltaY * 1.5;
      }
    };

    elemento.addEventListener("wheel", handleWheel, { passive: false });
    return () => elemento.removeEventListener("wheel", handleWheel);
  }, [ref]);
}
