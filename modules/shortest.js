export function shortest(str) {
    const words = str.split(/\s+/);
    return words.reduce((a, b) => (b.length < a.length && b.length > 0 ? b : a), '');
  }
  