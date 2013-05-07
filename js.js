var operacaoArmazenadaParaContasPosteriores = '';
var valorArmazenadoParaContasPosteriores = 0;
var resultadoArmazenado = 0;
var displayElementNumero = null;
var displayElementOperacao = null;
var limpaDisplay = false;

window.onload = function() {
  displayElementNumero = document.getElementById("displayNumero");
  displayElementOperacao = document.getElementById("displayOperacao");
  document.getElementById("divMaroto").style.left = '0px';
  document.getElementById("divMaroto").style.top = '0px';
}

function facAConta() {
  switch (operacaoArmazenadaParaContasPosteriores) {
    case '+':
      valorArmazenadoParaContasPosteriores += parseFloat(displayElementNumero.value);
      break;
    case '-':
      valorArmazenadoParaContasPosteriores -= parseFloat(displayElementNumero.value);
      break;
    case '*':
      valorArmazenadoParaContasPosteriores *= parseFloat(displayElementNumero.value);
      break;
    case '/':
      valorArmazenadoParaContasPosteriores /= parseFloat(displayElementNumero.value);
      break;
  }
}

function calcula() {
  switch (operacaoArmazenadaParaContasPosteriores) {
    case '+':
      valorArmazenadoParaContasPosteriores += parseFloat(displayElementNumero.value);
      break;
    case '-':
      valorArmazenadoParaContasPosteriores -= parseFloat(displayElementNumero.value);
      break;
    case '*':
      valorArmazenadoParaContasPosteriores *= parseFloat(displayElementNumero.value);
      break;
    case '/':
      valorArmazenadoParaContasPosteriores /= parseFloat(displayElementNumero.value);
      break;
  }
  displayElementNumero.value = valorArmazenadoParaContasPosteriores;
  displayElementOperacao.value = '';
  limpaDisplay = true;
  operacaoArmazenadaParaContasPosteriores = '';
  valorArmazenadoParaContasPosteriores = 0;
}

function operacao(operacaoMatematica) {
  if(valorArmazenadoParaContasPosteriores == 0) {
    valorArmazenadoParaContasPosteriores = parseFloat(displayElementNumero.value);
    operacaoArmazenadaParaContasPosteriores = operacaoMatematica;
    displayElementOperacao.value = operacaoMatematica;
  } else {
    switch (operacaoArmazenadaParaContasPosteriores) {
      case '+':
        valorArmazenadoParaContasPosteriores += parseFloat(displayElementNumero.value);
        break;
      case '-':
        valorArmazenadoParaContasPosteriores -= parseFloat(displayElementNumero.value);
        break;
      case '*':
        valorArmazenadoParaContasPosteriores *= parseFloat(displayElementNumero.value);
        break;
      case '/':
        valorArmazenadoParaContasPosteriores /= parseFloat(displayElementNumero.value);
        break;
  }
    operacaoArmazenadaParaContasPosteriores = operacaoMatematica;
    displayElementNumero.value = valorArmazenadoParaContasPosteriores;
    displayElementOperacao.value = operacaoMatematica;
  }
  limpaDisplay = true;
}

function inserirValorNoDisplay(valor) {
  if(limpaDisplay == true) {
    displayElementNumero.value = valor;
    limpaDisplay = false;
  } else {
    if(displayElementNumero.value == '0' && valor == '0') {
      displayElementNumero.value == valor;
    } else if(displayElementNumero.value == '0') {
      displayElementNumero.value = valor;
    } else {
      displayElementNumero.value = displayElementNumero.value + valor;
    }
  }
}

function limpaVisor() {
  operacaoMatematica = '';
  valorArmazenadoParaContasPosteriores = 0;
  displayElementNumero.value = '0';
  displayElementOperacao.value = '';
}

function mouseEmcimaDoDiv(obj) {
  if (obj.style.left == '0px' && obj.style.top == '0px') {
    obj.style.left = '150px';
  }
  else if (obj.style.left == '150px' && obj.style.top == '0px'){
    obj.style.top = '150px';
  }
  else if (obj.style.left == '150px' && obj.style.top == '150px'){
    obj.style.left = '0px';
  }
  else if (obj.style.top == '150px' && obj.style.left == '0px'){
    obj.style.top = '0px';
  }
}