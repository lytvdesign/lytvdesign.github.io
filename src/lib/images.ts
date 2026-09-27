const rasterImagePattern = /\.(?:png|jpe?g|webp|avif)$/i;

export type ProgressiveImageVariant = 'preview' | 'optimized' | 'full';

export const getProgressiveImagePath = (src: string, variant: ProgressiveImageVariant) => {
  if (!rasterImagePattern.test(src)) return src;

  const queryIndex = src.search(/[?#]/);
  const path = queryIndex === -1 ? src : src.slice(0, queryIndex);
  const suffix = queryIndex === -1 ? '' : src.slice(queryIndex);
  const extensionIndex = path.lastIndexOf('.');

  if (extensionIndex === -1) return src;

  return `${path.slice(0, extensionIndex)}.${variant}.webp${suffix}`;
};
