import { longest } from './modules/longest.js';
import { shortest } from './modules/shortest.js';
import { reverse } from './modules/reverse.js';
import { vowels } from './modules/vowels.js';
import { consonants } from './modules/consonants.js';
import { palindrome } from './modules/palindrome.js';

const form = document.querySelector('.string-form');
const outputDiv = document.querySelector('.output');
const inputField = document.getElementById('string');
const inputText = outputDiv.querySelector('.input');
const longestWord = outputDiv.querySelector('.longest');
const shortestWord = outputDiv.querySelector('.shortest');
const vowelsCount = outputDiv.querySelector('.vowels');
const consonantsCount = outputDiv.querySelector('.consonants');
const palindromeResult = outputDiv.querySelector('.palindrome');
const reversedString = outputDiv.querySelector('.reversed');

function analyzeString() {
  const str = inputField.value;
  inputText.textContent = str;
  longestWord.textContent = longest(str);
  shortestWord.textContent = shortest(str);
  vowelsCount.textContent = vowels(str);
  consonantsCount.textContent = consonants(str);
  palindromeResult.textContent = palindrome(str) ? 'er samhverfur' : 'ekki samhverfur';
  reversedString.textContent = reverse(str);
  outputDiv.classList.remove('hidden');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  analyzeString();
});

// Optional: update on keyup
inputField.addEventListener('keyup', analyzeString);
