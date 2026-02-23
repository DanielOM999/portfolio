"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useAnalyticsState() {
  const [isEnabled, setIsEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("analyticsEnabled");
    return stored !== null ? JSON.parse(stored) : false;
  });
  const [isVisible, setIsVisible] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const path = pathname;
  const search = searchParams;

  useEffect(() => {
    const storedState = localStorage.getItem("analyticsEnabled");

    const timer = setTimeout(() => {
      setHasInitialized(true);
      if (storedState === null) {
        setIsEnabled(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasInitialized) {
      localStorage.setItem("analyticsEnabled", JSON.stringify(isEnabled));
    }
  }, [isEnabled, hasInitialized]);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 0);
    const hideTimer = setTimeout(() => setIsVisible(false), 5000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [path, search]);

  const toggleAnalytics = () => setIsEnabled(!isEnabled);

  return { isEnabled, isVisible, hasInitialized, toggleAnalytics };
}
