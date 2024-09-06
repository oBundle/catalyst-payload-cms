import { Slideshow } from '~/components/ui/slideshow';
import type { Homepage } from '~/payload-types';

import SlideshowBG from './slideshow-bg-01.jpg';

const defaultSlides = [
  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: {
      src: SlideshowBG,
      alt: 'An assortment of brandless products against a blank background',
      blurDataUrl:
        'data:image/jpeg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAoAAAADoAQAAQAAAAcAAAAAAAAA/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgABwAKAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAMJ/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQIDBAURABIhMQYjgf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARAQIhQf/aAAwDAQACEQMRAD8AoZ5EzayKWW3Syo0GyKPTJlsF9ts9klsKTu46GQOfms2awJfAKywmt1sRNgqK7PS0gSHI4WltTmBuKQckJJzgE9aYa0tP/9k=',
    },
    key: 1,
    title: '25% Off Sale',
  },

  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    key: 2,
    title: 'Great Deals',
  },

  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    key: 3,
    title: 'Low Prices',
  },
];

interface HeroProps {
  hero: Homepage['hero'];
}

export const Hero = ({ hero }: HeroProps) => {
  const slides = hero?.slides || [];
  const normalizedSlides = slides.map((slide) => ({
    cta: {
      label: slide.cta || '',
      href: slide.ctaLink || '#',
    },
    description: slide.description || '',
    image: {
      src: defaultSlides[0]?.image?.src || SlideshowBG,
      alt: defaultSlides[0]?.image?.alt || '',
      blurDataUrl: defaultSlides[0]?.image?.blurDataUrl || '',
    },
    title: slide.title || '',
  }));

  return <Slideshow slides={normalizedSlides} />;
};
