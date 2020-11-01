import { normalizeCombiningMarks } from './combining-marks';
import { normalizeUnicode } from './unicode';
import { normalizeSpace } from './space';

/**
 * Apply all normalizations
 */
export const normalizeValue = (value: any) => {
  if (!value) {
    return '';
  }

  return normalizeSpace(normalizeUnicode(normalizeCombiningMarks(value)));
};
