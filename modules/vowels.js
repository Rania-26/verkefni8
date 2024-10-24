export function vowels(str) {
    return (str.match(/[aeiouáéíóúýæö]/gi) || []).length;
  }
  