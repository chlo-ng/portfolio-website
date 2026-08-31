import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import PropTypes from "prop-types";

const LenisContext = createContext(null);

// Mobile/touch detection: only enable smoothing when the primary input is a
// fine pointer (mouse/trackpad). Touch users keep native scrolling.
const prefersFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (!prefersFinePointer()) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      anchors: true,
      respectReducedMotion: true,
    });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

function useLenis() {
  return useContext(LenisContext);
}

LenisProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { LenisProvider, useLenis };
