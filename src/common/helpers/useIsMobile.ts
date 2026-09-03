import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = '(max-width: 768px)'

/** Returns true if the viewport is 768px or smaller. SSR-safe. */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Important: Check for window to prevent SSR hydration mismatch
    if (typeof window === 'undefined') return false
    return window.matchMedia(MOBILE_BREAKPOINT).matches
  })

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    // Subscribe to changes (resizing, rotating, etc.)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
