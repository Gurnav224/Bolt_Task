import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import Store from './Store.lib';
import Constants from '@/Constants';

function useAnimateDelay(delay: number) {
  const [isAbleToAnimate, setIsAbleToAnimate] = useState(false);
  const { inView, ref } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) setTimeout(() => setIsAbleToAnimate(true), delay);
  }, [inView, setIsAbleToAnimate, delay]);

  return { isAbleToAnimate, ref };
}

function useHeaderController() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return [isVisible];
}

function useNavbarDeps() {
  const isHeaderVisible = Store.useTheme((s) => s.isHeaderVisible);
  const isMobileListActive = Store.useTheme((s) => s.isNavbarActive);
  const setIsMobileListActive = Store.useTheme((s) => s.setIsNavbarActive);
  const [ref] = useState(nanoid());

  const handleClosing = () => {
    setIsMobileListActive(false);
  };

  const handlePrevention = (e: Event) => e.preventDefault();

  useEffect(() => {
    const navbarBg = document.getElementById(ref);
    navbarBg?.addEventListener('touchmove', handlePrevention);

    return () => navbarBg?.removeEventListener('touchmove', handlePrevention);
  }, [ref]);

  return { isHeaderVisible, isMobileListActive, handleClosing, ref };
}

function usePathNormalizer() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPaths = [
      Constants.routes.public.homeAlt.url,
      Constants.routes.public.homeAlt2.url,
    ];
    if (normalizedPaths.includes(pathname)) window.location.href = '/';
  }, [pathname]);

  return null;
}

function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [pathname]);

  return null;
}

function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const applyWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', applyWindowSize);
    return () => window.removeEventListener('resize', applyWindowSize);
  }, []);

  return [windowWidth];
}

function useWindowScrolling() {
  window.onscroll = () => {};
  return null;
}

function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
}

const Hook = {
  useAnimateDelay,
  useHeaderController,
  useNavbarDeps,
  usePathNormalizer,
  useScroll,
  useWindow,
  useWindowScrolling,
  useDisclosure,
};

export default Hook;
