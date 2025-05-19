import { useEffect, useState } from 'react';



export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollContainer = document.scrollingElement || document.documentElement;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      setScrollY(scrollTop);
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
