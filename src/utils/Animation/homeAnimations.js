// ===== PAGE TRANSITIONS - PREMIUM =====
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(20px)",
    rotateY: -45,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(20px)",
    rotateY: 45,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ===== CONTAINER WITH PREMIUM STAGGER =====
export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      ease: "easeOut",
    },
  },
};

// ===== FAST STAGGER CONTAINER =====
export const fastContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// ===== TEXT ANIMATIONS - PREMIUM =====
export const textReveal = {
  hidden: {
    y: 100,
    opacity: 0,
    filter: "blur(12px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

export const textRevealUp = {
  hidden: {
    y: 80,
    opacity: 0,
    filter: "blur(10px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

export const slideInLeft = {
  hidden: {
    x: -120,
    opacity: 0,
    filter: "blur(15px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

export const slideInRight = {
  hidden: {
    x: 120,
    opacity: 0,
    filter: "blur(15px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ===== IMAGE ANIMATIONS - PREMIUM =====
export const imageReveal = {
  hidden: {
    scale: 0.7,
    opacity: 0,
    rotate: -8,
    filter: "blur(15px)",
  },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ===== BUTTON ANIMATIONS - PREMIUM =====
export const buttonReveal = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

export const buttonHover = {
  scale: 1.08,
  y: -3,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonTap = {
  scale: 0.95,
};

// ===== STAGGERED LIST ITEMS - PREMIUM =====
export const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const listItem = {
  hidden: {
    x: -40,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ===== CARD ANIMATIONS - PREMIUM =====
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

// ===== STAT BLOCK ANIMATIONS - PREMIUM =====
export const statBlock = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    rotate: -10,
  },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// ===== SPECIAL ANIMATIONS =====
// Zoom + Fade para títulos
export const titleZoom = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    filter: "blur(20px)",
  },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// Stagger com rotation para elementos especiais
export const rotateReveal = {
  hidden: {
    opacity: 0,
    rotate: -90,
    scale: 0,
  },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};

// Fade in elegante
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.320, 1],
    },
  },
};