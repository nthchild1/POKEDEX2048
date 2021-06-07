import {PixelRatio} from 'react-native';

export function normalizePx(px: number) {
  if (PixelRatio.get() > 3) {
    return PixelRatio.roundToNearestPixel(px - PixelRatio.get() / 2);
  }
  if (PixelRatio.get() > 2) {
    return PixelRatio.roundToNearestPixel(px - 1);
  }
  if (PixelRatio.get() <= 1.5) {
    return PixelRatio.roundToNearestPixel(px - 2);
  }
  return px;
}
