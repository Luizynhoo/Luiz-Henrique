import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===== HELPER FUNCTION - REDUCES 40% CODE =====
/**
 * Universal animation helper - combines gsap.set + gsap.to
 * @param {HTMLElement} element - Target element
 * @param {Object} fromVars - Initial state variables
 * @param {Object} toVars - Animation target variables
 * @returns {gsap.Tween} - GSAP tween object
 */
const animate = (element, fromVars, toVars) => {
  if (!element) return;
  gsap.set(element, fromVars);
  return gsap.to(element, toVars);
};

// ===== EASE PRESETS - PREMIUM CURVES =====
const premiumEase = 'cubic-bezier(0.23, 1, 0.320, 1)';
const easeOut = 'power2.out';
const easeInOut = 'power2.inOut';

// ===== PAGE TRANSITIONS - PREMIUM =====
export const createPageTransition = (element, direction = 'forward') => {
  if (!element) return;

  const timeline = gsap.timeline();

  if (direction === 'forward') {
    gsap.set(element, {
      opacity: 0,
      scale: 0.92,
      filter: 'blur(20px)',
      y: 20,
    });

    timeline.to(element, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 1,
      ease: premiumEase,
    });
  } else {
    timeline.to(element, {
      opacity: 0,
      scale: 0.92,
      filter: 'blur(20px)',
      y: 20,
      duration: 0.7,
      ease: premiumEase,
    });
  }

  return timeline;
};

// ===== TEXT REVEAL ANIMATIONS =====
export const createTextReveal = (element, delay = 0) =>
  animate(element, { y: 100, opacity: 0, filter: 'blur(12px)' }, {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1,
    ease: premiumEase,
    delay,
  });

export const createTextRevealUp = (element, delay = 0) =>
  animate(element, { y: 80, opacity: 0, filter: 'blur(10px)' }, {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.8,
    ease: premiumEase,
    delay,
  });

// ===== SLIDE ANIMATIONS =====
export const createSlideInLeft = (element, delay = 0) =>
  animate(element, { x: -120, opacity: 0, filter: 'blur(15px)' }, {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1,
    ease: premiumEase,
    delay,
  });

export const createSlideInRight = (element, delay = 0) =>
  animate(element, { x: 120, opacity: 0, filter: 'blur(15px)' }, {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1,
    ease: premiumEase,
    delay,
  });

// ===== IMAGE ANIMATIONS =====
export const createImageReveal = (element, delay = 0) =>
  animate(element, { scale: 0.7, opacity: 0, rotate: -8, filter: 'blur(15px)' }, {
    scale: 1,
    opacity: 1,
    rotate: 0,
    filter: 'blur(0px)',
    duration: 1.2,
    ease: premiumEase,
    delay,
  });

// ===== BUTTON ANIMATIONS =====
export const createButtonReveal = (element, delay = 0) =>
  animate(element, { y: 50, opacity: 0, scale: 0.8 }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: premiumEase,
    delay,
  });

export const createButtonHover = (element) => {
  if (!element) return;
  return gsap.to(element, {
    scale: 1.08,
    y: -3,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    duration: 0.3,
    ease: easeOut,
    overwrite: 'false',
  });
};

export const createButtonHoverOut = (element) => {
  if (!element) return;
  return gsap.to(element, {
    scale: 1,
    y: 0,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    duration: 0.3,
    ease: easeOut,
  });
};

export const createButtonTap = (element) => {
  if (!element) return;
  return gsap.to(element, {
    scale: 0.95,
    duration: 0.1,
    ease: easeOut,
  });
};

// ===== CARD ANIMATIONS =====
export const createCardReveal = (element, delay = 0) =>
  animate(element, { y: 80, opacity: 0, scale: 0.85, filter: 'blur(10px)' }, {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.7,
    ease: premiumEase,
    delay,
  });

export const createCardHover = (element) => {
  if (!element) return;
  return gsap.to(element, {
    y: -10,
    scale: 1.03,
    rotateX: 6,
    duration: 0.35,
    ease: easeOut,
  });
};

export const createCardHoverOut = (element) => {
  if (!element) return;
  return gsap.to(element, {
    y: 0,
    scale: 1,
    rotateX: 0,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    duration: 0.3,
    ease: easeOut,
  });
};

// ===== STAT BLOCK ANIMATIONS =====
export const createStatBlock = (element, delay = 0) =>
  animate(element, { scale: 0.6, opacity: 0, rotate: -10 }, {
    scale: 1,
    opacity: 1,
    rotate: 0,
    duration: 0.8,
    ease: premiumEase,
    delay,
  });

// ===== TITLE ZOOM ANIMATION =====
export const createTitleZoom = (element, delay = 0) =>
  animate(element, { scale: 0.5, opacity: 0, filter: 'blur(20px)' }, {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1,
    ease: premiumEase,
    delay,
  });

// ===== ROTATE REVEAL ANIMATION =====
export const createRotateReveal = (element, delay = 0) =>
  animate(element, { opacity: 0, rotate: -90, scale: 0 }, {
    opacity: 1,
    rotate: 0,
    scale: 1,
    duration: 0.8,
    ease: premiumEase,
    delay,
  });

// ===== FADE IN UP ANIMATION =====
export const createFadeInUp = (element, delay = 0) =>
  animate(element, { opacity: 0, y: 40 }, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: premiumEase,
    delay,
  });

// ===== STAGGER ANIMATIONS FOR LISTS =====
export const createStaggerAnimation = (elements, delay = 0) => {
  if (!elements || elements.length === 0) return;

  return gsap.from(elements, {
    x: -40,
    opacity: 0,
    filter: 'blur(8px)',
    duration: 0.6,
    ease: premiumEase,
    stagger: 0.12,
    delay,
  });
};

// ===== CONTINUOUS PULSE ANIMATION =====
export const createPulse = (element, intensity = 1) => {
  if (!element) return;
  return gsap.to(element, {
    boxShadow: `0 0 ${20 * intensity}px rgba(59, 130, 246, 0.6)`,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// ===== FLOAT ANIMATION =====
export const createFloat = (element, distance = 10, duration = 3) => {
  if (!element) return;
  return gsap.to(element, {
    y: -distance,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// ===== PARALLAX WITH SCROLL TRIGGER - POWER ENHANCED =====
/**
 * Create parallax effect using ScrollTrigger
 * @param {HTMLElement} element - Element to parallax
 * @param {Object} options - Configuration options
 * @returns {ScrollTrigger} - ScrollTrigger instance
 */
export const createParallaxWithScrollTrigger = (element, options = {}) => {
  if (!element) return;

  const {
    intensity = 0.5,
    trigger = element.parentElement,
    start = 'top center',
    end = 'bottom center',
    markers = false,
  } = options;

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    markers,
    onUpdate: (self) => {
      gsap.set(element, {
        y: self.getVelocity() * intensity,
        overwrite: 'auto',
      });
    },
  });
};

// ===== ADVANCED PARALLAX - SMOOTH & RESPONSIVE =====
export const createSmoothParallax = (element, intensity = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    y: () => window.innerHeight * 0.5,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        gsap.set(element, {
          y: self.progress * 100 * intensity,
        });
      },
    },
  });
};

// ===== ROTATE CONTINUOUS ANIMATION =====
export const createRotate = (element, duration = 20) => {
  if (!element) return;
  return gsap.to(element, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: 'none',
  });
};

// ===== SCROLL REVEAL ANIMATION WITH SCROLL TRIGGER =====
export const createScrollReveal = (element, options = {}) => {
  if (!element) return;

  const {
    fromVars = { opacity: 0, y: 40, filter: 'blur(8px)' },
    duration = 0.8,
    start = 'top 80%',
    end = 'top 50%',
    scrub = false,
  } = options;

  gsap.set(element, fromVars);

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration,
    ease: premiumEase,
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub,
      markers: false,
    },
  });
};

// ===== BATCH SCROLL ANIMATIONS =====
export const createBatchScrollAnimation = (selector, options = {}) => {
  const {
    fromVars = { opacity: 0, y: 40 },
    duration = 0.8,
    stagger = 0.2,
    start = 'top 85%',
  } = options;

  const elements = gsap.utils.toArray(selector);

  return gsap.to(elements, {
    ...fromVars,
    opacity: 1,
    y: 0,
    duration,
    stagger,
    scrollTrigger: {
      trigger: elements[0]?.parentElement,
      start,
      markers: false,
    },
  });
};

// ===== CURTAIN PAGE TRANSITION =====
export const curtainTransition = (callback) => {
  const tl = gsap.timeline();

  tl.to(
    '.curtain',
    {
      scaleY: 1,
      duration: 0.55,
      transformOrigin: 'bottom',
      ease: 'power4.in',
    }
  )
    .to(
      '.page-container',
      {
        scale: 0.95,
        filter: 'blur(8px)',
        duration: 0.4,
        ease: 'power2.out',
      },
      '<'
    )
    .call(callback)
    .set('.page-container', {
      scale: 1,
      filter: 'blur(0px)',
    })
    .to('.curtain', {
      scaleY: 0,
      duration: 0.55,
      transformOrigin: 'top',
      ease: 'power4.out',
    });
};

// ===== STAGGERED BATCH REVEAL =====
export const createBatchReveal = (containerSelector, delay = 0) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const items = gsap.utils.toArray('[data-reveal]', container);

  const timeline = gsap.timeline({ delay });

  items.forEach((item, index) => {
    gsap.set(item, {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    });

    timeline.to(
      item,
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: premiumEase,
      },
      index * 0.1
    );
  });

  return timeline;
};

// ===== CLEANUP FUNCTION =====
export const killAllAnimations = (elements) => {
  if (Array.isArray(elements)) {
    elements.forEach((el) => {
      if (el) gsap.killTweensOf(el);
    });
  } else if (elements) {
    gsap.killTweensOf(elements);
  }
};

// ===== CLEANUP SCROLL TRIGGERS =====
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
