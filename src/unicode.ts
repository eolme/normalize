const normalizeUnicodeNative = String.prototype.normalize;

/**
 * Normalize Unicode NFKD mode
 */
export const normalizeUnicode = (value: any) => {
  if (!value) {
    return '';
  }

  let str = String(value);

  if (normalizeUnicodeNative) {
    try {
      str = normalizeUnicodeNative.call(str, 'NFKD');
    } catch (e) { /* ignore */ }
  }

  return str;
};
