'use strict';

function parseInputs() {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Veuillez saisir deux nombres valides.');
  }
  return { a, b };
}

function setResult(value) {
  document.getElementById('result').textContent = String(value);
}

function setHint(message) {
  document.getElementById('hint').textContent = message || '';
}


function add(a, b) {
  throw new Error('Addition non implémentée.');
}

function subtract(a, b) {
  throw new Error('Soustraction non implémentée.');
}

function multiply(a, b) {
  return a * b;
}


function safeCompute(operationName, fn) {
  try {
    const { a, b } = parseInputs();
    const value = fn(a, b);
    setResult(value);
    setHint(`${operationName} effectuée.`);
  } catch (err) {
    setResult('—');
    setHint(err.message);
  }
}

document.getElementById('btn-add').addEventListener('click', () => safeCompute('Addition', add));
document.getElementById('btn-sub').addEventListener('click', () => safeCompute('Soustraction', subtract));
document.getElementById('btn-mul').addEventListener('click', () => safeCompute('Multiplication', multiply));
