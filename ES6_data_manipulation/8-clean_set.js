export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const parts = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }
  return parts.join('-');
}
