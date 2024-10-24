export function palindrome(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
  