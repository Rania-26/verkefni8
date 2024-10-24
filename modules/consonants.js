export function consonants(str) {
    return (str.match(/[bcdfghjklmnpqrstvwxyzðþ]/gi) || []).length;
  }
  