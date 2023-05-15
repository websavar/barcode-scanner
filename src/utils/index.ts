export const getNormalizedCode = (code: string) => {
  const RemovedLeadingZerosCode = code.replace(/^0+/, '');
  const NormalizedCode = RemovedLeadingZerosCode.normalize('NFC');
  // to ensure that all characters are represented in a consistent way.
  // This method returns the Unicode Normalization Form of a given string.
  // NFC: Normalization Form Canonical Composition. it's the default normalization form for JavaScript.
  return NormalizedCode;
}
