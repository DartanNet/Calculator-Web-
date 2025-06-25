let display = document.getElementById('ekran');
let currentExpression = '';

function appendNumber(num) {
  if (currentExpression === '0') {
    currentExpression = num;
  } else {
    currentExpression += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentExpression.slice(-1);
  if ("+-*/^".includes(lastChar)) {
    currentExpression = currentExpression.slice(0, -1);
  }
  currentExpression += op;
  updateDisplay();
}

function appendFunction(fn) {
  currentExpression += fn;
  updateDisplay();
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay('0');
}

function calculateResult() {
  try {
    const expression = currentExpression.replace(/\^/g, '**');
    const result = eval(expression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (e) {
    updateDisplay('Błąd');
    currentExpression = '';
  }
}

function updateDisplay(val) {
  display.textContent = val || currentExpression || '0';
}
