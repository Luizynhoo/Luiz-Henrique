import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const cursorOutline = document.createElement("div");
    cursorOutline.classList.add("cursor-outline");
    document.body.appendChild(cursorOutline);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow para o cursor principal
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;

      // Smooth follow mais lento para o outline
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      cursorOutline.style.left = outlineX + "px";
      cursorOutline.style.top = outlineY + "px";

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = (e) => {
      const wrapper = document.querySelector(".dragging-cursor");
      if (wrapper) {
        wrapper.classList.remove("dragging-cursor");
      }

      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.classList.contains("interactive")
      ) {
        document.body.classList.add("dragging-cursor");
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("dragging-cursor");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOutline);
    };
  }, []);
}
