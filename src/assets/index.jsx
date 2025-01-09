const images = import.meta.glob('./**/*.png', { eager: true }); // Match files in all subdirectories

const exportedImages = Object.entries(images).reduce((acc, [key, value]) => {
  const name = key.replace('./', '').replace('.png', '').replace(/\//g, '_'); // Replace slashes with underscores
  acc[name] = value.default; // Add to export object
  return acc;
}, {});

// Export as default
export default exportedImages;