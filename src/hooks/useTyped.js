import { useState, useEffect } from 'react';

export function useTyped(text, { delay = 0, speed = 28, enabled = true } = {}) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) { setOut(text); setDone(true); return; }
    let i = 0;
    let cancelled = false;
    setOut(''); setDone(false);
    const start = setTimeout(function tick() {
      if (cancelled) return;
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i++;
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, delay);
    return () => { cancelled = true; clearTimeout(start); };
  }, [text, delay, speed, enabled]);

  return [out, done];
}
