'use client';
import { useEffect, useState } from 'react';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  return hasMounted;
}
