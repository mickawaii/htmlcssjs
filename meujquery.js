
$(document).ready(function(){
  div_maroto_element = $(".div_maroto");

  div_maroto_element.css({
    left: "0px",
    top: "0px"
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

// function mouseEmcimaDoDiv(obj) {
//   if (obj.style.left == '0px' && obj.style.top == '0px') {
//     obj.style.left = '150px';
//   }
//   else if (obj.style.left == '150px' && obj.style.top == '0px'){
//     obj.style.top = '150px';
//   }
//   else if (obj.style.left == '150px' && obj.style.top == '150px'){
//     obj.style.left = '0px';
//   }
//   else if (obj.style.top == '150px' && obj.style.left == '0px'){
//     obj.style.top = '0px';
//   }
// }
