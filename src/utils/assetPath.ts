/**
 * Get the correct asset path for both development and production
 * In production (GitHub Pages), we need to prepend the base URL
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, Vite will replace import.meta.env.BASE_URL with the actual base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

