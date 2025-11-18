import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    // cria elementos se não existirem
    let cursor = document.querySelector(".cursor");
    let outline = document.querySelector(".cursor-outline");

    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "cursor";
      document.body.appendChild(cursor);
    }
    if (!outline) {
      outline = document.createElement("div");
      outline.className = "cursor-outline";
      document.body.appendChild(outline);
    }

    // esconder cursor nativo (opcional)
    document.documentElement.style.cursor = "none";

    // pos inicial
    cursor.style.left = "0px";
    cursor.style.top = "0px";
    outline.style.left = "0px";
    outline.style.top = "0px";

    // smooth trailing (outline) settings
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    const ease = 0.15;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      // aproxima o outline do cursor (delay)
      outlineX += (mouseX - outlineX) * ease;
      outlineY += (mouseY - outlineY) * ease;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    // liga eventos
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    // mudar estado ao clicar / arrastar
    const addDragging = () => {
      document.documentElement.classList.add("dragging-cursor");
    };
    const removeDragging = () => {
      document.documentElement.classList.remove("dragging-cursor");
    };

    window.addEventListener("mousedown", addDragging);
    window.addEventListener("mouseup", removeDragging);

    // para touch devices — exibe um cursor pequeno quando usuário toca (opcional)
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const t = e.touches[0];
      mouseX = t.clientX;
      mouseY = t.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", addDragging);
      window.removeEventListener("mouseup", removeDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      // remove elementos criados (opcionalmente)
      // cursor.remove(); outline.remove();
      document.documentElement.style.cursor = ""; // restaura cursor nativo
    };
  }, []);
}
