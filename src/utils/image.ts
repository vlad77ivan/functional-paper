const IMAGE_SIZES_BASE = `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`;

export function getImageWidths(originalWidth: number): number[] {
  return [240, 540, 720, originalWidth];
}

export function getImageSizes(originalWidth: number): string {
  return `${IMAGE_SIZES_BASE}, ${originalWidth}px`;
}
