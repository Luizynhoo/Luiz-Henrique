import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para animar um elemento quando ele entra no viewport
 * @param {Function} animationFunction - Função que cria a animação
 * @param {Object} options - Opções de configuração
 * @returns {Object} - ref para anexar ao elemento
 */
export const useGsapAnimation = (animationFunction, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      animationFunction(elementRef.current, options.delay || 0);
    }

    return () => {
      if (elementRef.current) {
        gsap.killTweensOf(elementRef.current);
      }
    };
  }, [animationFunction, options.delay]);

  return elementRef;
};

/**
 * Hook para animar múltiplos elementos com stagger
 * @param {Function} animationFunction - Função que cria a animação
 * @param {number} staggerDelay - Delay entre cada elemento
 * @returns {Object} - ref para anexar ao container
 */
export const useGsapStagger = (animationFunction, staggerDelay = 0.12) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('[data-animate]');
      if (elements.length > 0) {
        const timeline = gsap.timeline();

        elements.forEach((element, index) => {
          gsap.set(element, {
            opacity: 0,
            y: 40,
          });

          timeline.to(
            element,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'cubic-bezier(0.23, 1, 0.320, 1)',
            },
            index * staggerDelay
          );
        });
      }
    }

    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('[data-animate]');
        elements.forEach((el) => gsap.killTweensOf(el));
      }
    };
  }, [staggerDelay]);

  return containerRef;
};

/**
 * Hook para animar elemento ao fazer hover
 * @param {Object} hoverProps - Propriedades de animação
 * @returns {Object} - objeto com event handlers
 */
export const useGsapHover = (hoverProps = {}) => {
  const elementRef = useRef(null);

  const handleMouseEnter = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        ...hoverProps,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'false',
      });
    }
  };

  const handleMouseLeave = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        scale: 1,
        y: 0,
        boxShadow: hoverProps.boxShadowRevert || '0 10px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return {
    ref: elementRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

/**
 * Hook para observar elemento entrando no viewport e disparar animação
 * @param {Function} animationFunction - Função que cria a animação
 * @param {Object} options - Opções de configuração
 * @returns {Object} - ref para anexar ao elemento
 */
export const useGsapInView = (animationFunction, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFunction(element, options.delay || 0);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        ...options.observerOptions,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animationFunction, options]);

  return elementRef;
};

/**
 * Hook para usar ScrollTrigger com animações
 * @param {Function} animationFunction - Função que cria a animação com ScrollTrigger
 * @param {Object} options - Opções de ScrollTrigger
 * @returns {Object} - ref para anexar ao elemento
 */
export const useScrollTrigger = (animationFunction, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const trigger = animationFunction(elementRef.current, options);

      return () => {
        if (trigger && typeof trigger.kill === 'function') {
          trigger.kill();
        }
        gsap.killTweensOf(elementRef.current);
      };
    }
  }, [animationFunction, options]);

  return elementRef;
};

/**
 * Hook para gerenciar timeline GSAP
 * @returns {Object} - object com timeline e métodos
 */
export const useGsapTimeline = () => {
  const timelineRef = useRef(null);

  const addAnimation = (target, vars, position = '+=0') => {
    if (!timelineRef.current) {
      timelineRef.current = gsap.timeline();
    }
    timelineRef.current.to(target, vars, position);
    return timelineRef.current;
  };

  const reset = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };

  return {
    addAnimation,
    timeline: timelineRef.current,
    reset,
  };
};

/**
 * Hook para animar batch de elementos com ScrollTrigger
 * @param {string} selector - Seletor CSS dos elementos
 * @param {Object} options - Opções de animação
 * @returns {Object} - objeto com ref e métodos
 */
export const useGsapBatchScroll = (selector, options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && selector) {
      const elements = gsap.utils.toArray(selector, containerRef.current);

      const config = {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'cubic-bezier(0.23, 1, 0.320, 1)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          markers: false,
          ...options.scrollTriggerOptions,
        },
        ...options,
      };

      gsap.set(elements, {
        opacity: 0,
        y: 40,
      });

      const animation = gsap.to(elements, config);

      return () => {
        animation.kill();
        elements.forEach((el) => gsap.killTweensOf(el));
      };
    }
  }, [selector, options]);

  return containerRef;
};

