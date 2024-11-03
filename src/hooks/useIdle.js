import { useState, useEffect, useRef } from 'react';
function useIdle(timeout = 1000) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutId = useRef(null);  
  const handleActivity = () => {
    setIsIdle(false);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setIsIdle(true);  
    }, timeout);
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);
    return () => {
      clearTimeout(timeoutId.current);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
    };
  }, [timeout]);
  return isIdle;
}
export default useIdle;
