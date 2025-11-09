/**
 * Font loading utility
 * Checks if OpenDyslexic font is loaded and provides fallback
 */

/**
 * Check if a font is loaded
 */
export const checkFontLoaded = (fontFamily: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof document === 'undefined') {
      resolve(false);
      return;
    }

    try {
      // Check if font is available
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          const fontLoaded = document.fonts.check(`16px "${fontFamily}"`);
          resolve(fontLoaded);
        });
      } else {
        // Fallback for browsers without Font Loading API
        resolve(false);
      }
    } catch (error) {
      console.warn('Error checking font:', error);
      resolve(false);
    }
  });
};

/**
 * Get font family with fallback
 */
export const getFontFamily = (preferredFont: string = 'OpenDyslexic'): string => {
  // Always include fallback fonts
  if (preferredFont === 'OpenDyslexic') {
    return "'OpenDyslexic', 'Lexend', sans-serif";
  }
  return `${preferredFont}, 'Lexend', sans-serif`;
};

/**
 * Load font asynchronously
 */
export const loadFont = async (fontFamily: string, fontUrl: string): Promise<boolean> => {
  if (typeof document === 'undefined') {
    return false;
  }

  try {
    if ('fonts' in document) {
      const font = new FontFace(fontFamily, `url(${fontUrl})`);
      await font.load();
      document.fonts.add(font);
      return true;
    }
  } catch (error) {
    console.warn('Error loading font:', error);
  }

  return false;
};

