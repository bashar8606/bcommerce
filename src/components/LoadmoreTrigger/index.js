// components/LoadMoreTrigger.js

import { useEffect, useRef } from 'react';

const LoadMoreTrigger = ({ onLoadMore }) => {
  const ref = useRef();

  useEffect(() => {
    if (!IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onLoadMore]);

  return <div ref={ref} className="load-more-trigger h-1 bg-red-400" >dgfdfgd</div>;
};

export default LoadMoreTrigger;