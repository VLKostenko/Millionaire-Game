import { useSyncExternalStore } from 'react';

const getServerSnapshot = (): boolean => false; // default for SSR

function useMediaQuery(query: string): boolean {
  const getSnapshot = (): boolean => window.matchMedia(query).matches;

  const subscribe = (callback: () => void): (() => void) => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', callback);

    return () => mediaQueryList.removeEventListener('change', callback);
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
