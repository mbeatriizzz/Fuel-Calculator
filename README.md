

## English

Calculadora de Combustivel
Um simples projeto que calcula o preço do combustivel.

## Português

Fuel Calculator
A simple project that calculates the price of fuel.

<button id="toggleButton" onclick="toggleLanguage()">Toggle Language</button>

<script>
function toggleLanguage() {
  var englishSection = document.getElementById('englishSection');
  var portugueseSection = document.getElementById('portugueseSection');

  if (englishSection.style.display === 'none') {
    englishSection.style.display = 'block';
    portugueseSection.style.display = 'none';
  } else {
    englishSection.style.display = 'none';
    portugueseSection.style.display = 'block';
  }
}
</script>
