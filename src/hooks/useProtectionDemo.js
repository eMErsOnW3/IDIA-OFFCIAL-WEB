import { useCallback, useEffect, useRef, useState } from 'react';

// Local animation only. Each component owns an independent timer and phase.
export default function useProtectionDemo() {
  const [phase, setPhase] = useState('ready');
  const timers = useRef([]);
  const cancel = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);
  useEffect(() => cancel, [cancel]);
  const reset = useCallback(() => { cancel(); setPhase('ready'); }, [cancel]);
  const protect = () => {
    if (phase !== 'ready') return;
    cancel();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPhase('detecting');
    timers.current.push(setTimeout(() => setPhase('scanning'), reduced ? 40 : 350));
    timers.current.push(setTimeout(() => setPhase('protected'), reduced ? 100 : 1750));
  };
  return { phase, protect, reset, running: phase === 'detecting' || phase === 'scanning' };
}
