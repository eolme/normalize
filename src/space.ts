// all unicode space-like symbols
const CWA = /[\u0001-\u000C]|[\u000E-\u0020]|[\u007F-\u009F]|\u1680|[\u2002-\u200B]|\u2028|\u2029|\u202F|\u205F|\u3000|\uFEFF|\uFFFE/g;

// trim
const BW = /^\s*|\s*$/g;

// double space
const DW = /\s+/g;

/**
 * Normalize Unicode space symbols
 */
export const normalizeSpace = (value: any) => {
  if (!value) {
    return '';
  }

  return String(value)
    .replace(CWA, ' ')
    .replace(BW, '')
    .replace(DW, ' ');
};
