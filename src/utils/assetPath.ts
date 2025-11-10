/**
 * Get the correct asset path for both development and production
 * In production (GitHub Pages), we need to prepend the base URL
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Use absolute URL for production to ensure images always load
  const isDev = import.meta.env.DEV;

  if (isDev) {
    // Development: use relative path
    return `/${cleanPath}`;
  } else {
    // Production: use absolute URL to GitHub Pages
    return `https://rahmatdial-prjct.github.io/portofolio/${cleanPath}`;
  }
};

