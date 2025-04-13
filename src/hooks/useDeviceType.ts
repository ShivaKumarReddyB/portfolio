import { useState, useEffect } from "react";

export const useDeviceType = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    // Define media queries
    const mobileQuery = "(max-width: 480px)";
    const tabletQuery = "(min-width: 481px) and (max-width: 1024px)";
    const desktopQuery = "(min-width: 1025px)";

    // Create matchMedia objects
    const mobileMedia = window.matchMedia(mobileQuery);
    const tabletMedia = window.matchMedia(tabletQuery);
    const desktopMedia = window.matchMedia(desktopQuery);

    // Update device info based on media query matches
    const updateDeviceInfo = () => {
      setDeviceInfo({
        isMobile: mobileMedia.matches,
        isTablet: tabletMedia.matches,
        isDesktop: desktopMedia.matches
      });
    };

    // Initialize device info on mount
    updateDeviceInfo();

    // Add event listeners for media query changes
    mobileMedia.addEventListener("change", updateDeviceInfo);
    tabletMedia.addEventListener("change", updateDeviceInfo);
    desktopMedia.addEventListener("change", updateDeviceInfo);

    // Cleanup event listeners on unmount
    return () => {
      mobileMedia.removeEventListener("change", updateDeviceInfo);
      tabletMedia.removeEventListener("change", updateDeviceInfo);
      desktopMedia.removeEventListener("change", updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};
