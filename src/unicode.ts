const normalizeUnicodeNative = String.prototype.normalize;

/**
 * Normalize Unicode NFKD mode
 */
export const normalizeUnicode = (value?: string | null) => {
  if (!value) {
    return '';
  }

  let str = value;

  if (normalizeUnicodeNative) {
    try {
      str = normalizeUnicodeNative.call(str, 'NFKD');
    } catch (e) { /* ignore */ }
  }

  return str;
};
