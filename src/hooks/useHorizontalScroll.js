import { useEffect } from "react";

export function useHorizontalScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // --- SCROLL VERTICAL → HORIZONTAL ---
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    // --- DRAG COM MOUSE ---
    let isDown = false;
    let startX;
    let scrollLeftStart;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeftStart = el.scrollLeft;
      el.classList.add("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeftStart - walk;
    };

    // --- TOUCH (CELULAR / TABLET) ---
    let touchStartX = 0;
    let touchScrollStart = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollStart = el.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = x - touchStartX;
      el.scrollLeft = touchScrollStart - walk;
    };

    // --- EVENTOS ---
    el.addEventListener("wheel", handleWheel, { passive: false });

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mousemove", handleMouseMove);

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      el.removeEventListener("wheel", handleWheel);

      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousemove", handleMouseMove);

      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [ref]);
}
