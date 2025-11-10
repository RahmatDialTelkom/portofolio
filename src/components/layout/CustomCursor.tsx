import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input[type="submit"], input[type="button"], [role="button"]');

      if (isInteractive) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    const handleMouseEnter = () => {
      document.documentElement.style.setProperty('--cursor-opacity', '1');
    };

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty('--cursor-opacity', '0');
      document.body.classList.remove('cursor-hover');
    };

    // Add event listeners
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Set initial opacity to 1
    document.documentElement.style.setProperty('--cursor-opacity', '1');

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return null; // This component doesn't render anything
};

