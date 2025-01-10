"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useAnalyticsState() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const path = pathname;
  const search = searchParams;

  useEffect(() => {
    const storedState = localStorage.getItem("analyticsEnabled");
    if (storedState !== null) {
      setIsEnabled(JSON.parse(storedState));
    }

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
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, [path, search]);

  const toggleAnalytics = () => setIsEnabled(!isEnabled);

  return { isEnabled, isVisible, hasInitialized, toggleAnalytics };
}
