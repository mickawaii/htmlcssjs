var limpaDisplay = false;
var operacaoArmazenadaParaContasPosteriores = '';
var valorArmazenadoParaContasPosteriores = 0;
var displayElementNumero = null;
var displayElementOperacao = null;

$(document).ready(function(){
  displayElementNumero = $("#displayNumero");
  displayElementOperacao = $("displayOperacao");
  $("#divMaroto").css({
    top: "0px",
    left: "0px"
  });

  $("#botaoApagar").click(function(){
    $("#apagar").toggle("");
    return false;
  });

  $(".botaoInsereNumero").click(function(){
    var valorDoBotao = $(this).html();

    if(limpaDisplay == true) {
      displayElementNumero.val(valorDoBotao);
      limpaDisplay = false;
    } else {
      if(displayElementNumero.val() == '0' && valorDoBotao == '0') {
        displayElementNumero.val(valorDoBotao); 
      } else if(displayElementNumero.val() == '0') {
        displayElementNumero.val(valorDoBotao);
      } else {
        displayElementNumero.val(displayElementNumero.val()+valorDoBotao);
      }
    }
  });

  $(".botaoInsereOperacao").click(function(){
    var operacaoMatematica = $(this).html();
    if(valorArmazenadoParaContasPosteriores == 0) {
      valorArmazenadoParaContasPosteriores = parseFloat(displayElementNumero.val());
      operacaoArmazenadaParaContasPosteriores = operacaoMatematica;
      displayElementOperacao.val(operacaoMatematica);
    } else {
      fazAConta();
      operacaoArmazenadaParaContasPosteriores = operacaoMatematica;
      displayElementNumero.val(valorArmazenadoParaContasPosteriores);
      displayElementOperacao.val(operacaoMatematica);
    }
    limpaDisplay = true;
  });

  $(".botaoCalcula").click(function(){
    fazAConta();
    displayElementNumero.val(valorArmazenadoParaContasPosteriores);
    displayElementOperacao.val('');
    limpaDisplay = true;
    operacaoArmazenadaParaContasPosteriores = '';
    valorArmazenadoParaContasPosteriores = 0;
  });

  $(".botaoLimpa").click(function(){
    operacaoArmazenadaParaContasPosteriores = '';
    valorArmazenadoParaContasPosteriores = 0;
    displayElementNumero.val('0');
    displayElementOperacao.val('');
  });

  $("#divMaroto").mouseOver(function(){
    if ($(this).css("left") == '0' && $(this).css("top") == '0') {
      $(this).animate({
        top: "0px";
        left: "150px";
      }, 1000 );
    }
    else if ($(this).css("left") == '150px' && $(this).css("top") == '0px'){
      $(this).css("top", "+=150px");
    }
    else if ($(this).css("left") == '150px' && $(this).css("top") == '150px'){
      $(this).css("left", "-=150px");
    }
    else if ($(this).css("top") == '150px' && $(this).css("left") == '0px'){
      $(this).css("top", "-=150px");
    }
});
  
function fazAConta() {
  switch (operacaoArmazenadaParaContasPosteriores) {
    case '+':
      valorArmazenadoParaContasPosteriores += parseFloat(displayElementNumero.val());
      break;
    case '-':
      valorArmazenadoParaContasPosteriores -= parseFloat(displayElementNumero.val());
      break;
    case '*':
      valorArmazenadoParaContasPosteriores *= parseFloat(displayElementNumero.val());
      break;
    case '/':
      valorArmazenadoParaContasPosteriores /= parseFloat(displayElementNumero.val());
      break;
  }
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

