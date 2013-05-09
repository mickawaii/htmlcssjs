var limpaDisplay = false;
var operacaoArmazenadaParaContasPosteriores = '';
var valorArmazenadoParaContasPosteriores = 0;
var displayElementNumero = null;
var displayElementOperacao = null;

$(document).ready(function(){
  displayElementNumero = $("#displayNumero");
  displayElementOperacao = $("displayOperacao");
  div_maroto_element = $(".div_maroto");

  div_maroto_element.css({
    left: "0px",
    top: "0px"
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

  div_maroto_element.mouseover(function(){
    if(div_maroto_element.css("left") == '0px' && div_maroto_element.css("top") == '0px') {
      div_maroto_element.animate({left: '150px'}, 200);
    } else if(div_maroto_element.css("left") == '150px' &&  div_maroto_element.css("top") == '0px'){
      div_maroto_element.animate({top: '150px'}, 200);
    } else if(div_maroto_element.css("left") == '150px' &&  div_maroto_element.css("top") == '150px'){
      div_maroto_element.animate({left: '0px'}, 200);
    } else if(div_maroto_element.css("top") == '150px' &&  div_maroto_element.css("left") == '0px'){
      div_maroto_element.animate({top: '0px'}, 200);
    }
  });
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
