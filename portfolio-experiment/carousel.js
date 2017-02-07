$(document).ready(function() {
    $(".next").click(function(){
        rotateRight();
    });
});

var currdeg = 0;

function rotateRight(){

  currdeg = currdeg + 72;
    console.log(currdeg);

  $(".carousel").css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
};
