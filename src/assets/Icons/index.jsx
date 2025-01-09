const icons = import.meta.glob('./*.png', { eager: true });

const exportedIcons = Object.entries(icons).reduce((acc, [key, value]) => {
  const name = key.replace('./', '').replace('.png', ''); // Strip path and extension
  acc[name] = value.default;
  return acc;
}, {});

export default exportedIcons;