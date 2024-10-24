export function longest(str) {
    const words = str.split(/\s+/);
    return words.reduce((a, b) => (b.length > a.length ? b : a), '');
  }
  