export const cardReveal = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.85,
    filter: "blur(10px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

export const cardHover = {
  y: -12,
  scale: 1.05,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};
