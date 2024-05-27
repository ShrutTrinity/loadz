import { useState, useRef, useEffect } from 'react';
const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const ref = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { clientHeight, clientWidth } = ref.current;
        setDimensions({ height: clientHeight+10, width: clientWidth });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return [ref, dimensions];
};
export default useDimensions;
