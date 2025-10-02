import { useState, useEffect } from "react";

const INTRO_SHOWN_KEY = "intro_completed";

export function useIntroCheck() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(INTRO_SHOWN_KEY)) {
      setShouldShowIntro(false);
    }
  }, []);

  const markIntroComplete = () => {
    localStorage.setItem(INTRO_SHOWN_KEY, "true");
  };

  return { shouldShowIntro, markIntroComplete };
}
