$(document).ready(function (){
  $("#dropdown").animate({top: $(window).height() / 2}, 2000);
});

//var dropdown = document.getElementById('dropdown');
//dropdown.addEventListener("click", function(){
//  dropdown.style.animation = "rotate 2s";
//  dropdown.style.webkitAnimation = "rotate 2s";
//});


$(document).ready(function(){
$("#dropdown").click(function(){
  $(this).css({'visibility': 'hidden'})
});
})

$(document).ready(function () {
    $("#header").click(function () {
        $("#header_p").fadeOut(function () {
            $("#header_p").text(($("#header_p").text() == ' truly c. strange') ? " truly c. strange" : " truly c. strange").fadeIn();
        })
    })
});


window.onload = function() {
  window.setTimeout(fadeout, 2500); //8 seconds
  window.setTimeout(fadeout2, 2500); //8 seconds
  window.setTimeout(fadeout3, 2500); //8 seconds
  window.setTimeout(fadeout4, 2500); //8 seconds
  window.setTimeout(fadeout5, 2500); //8 seconds
  window.setTimeout(fadeout6, 2500); //8 seconds
  window.setTimeout(fadeout7, 2500); //8 seconds
  window.setTimeout(fadeout8, 2500);
  window.setTimeout(fadeout9, 2500);
  window.setTimeout(fadeout10, 2500);


}

function fadeout() {
  document.getElementById('fadeout').style.opacity = '0';
  document.getElementById('fadeout2').style.opacity = '0';
  document.getElementById('fadeout3').style.opacity = '0';
  document.getElementById('fadeout4').style.opacity = '0';
  document.getElementById('fadeout5').style.opacity = '0';
  document.getElementById('fadeout6').style.opacity = '0';
  document.getElementById('fadeout7').style.opacity = '0';
  document.getElementById('fadeout8').style.opacity = '0';
  document.getElementById('fadeout9').style.opacity = '0';
  document.getElementById('fadeout10').style.opacity = '0';

}

//Get the button
var mybutton = document.getElementById("#toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function changeText()
{
 document.getElementById('boldStuff').innerHTML = 'Fred Flinstone';
}

function changeText()
{
 document.getElementById('truly').innerHTML = 'Truly C. Strange';
}

$(document).ready(function () {
    $("#truly").click(function () {
        $("#truly_p").fadeOut(function () {
            $("#truly_p").text(($("#truly_p").text() == 'Charlotte Strange') ? "Truly C. Strange" : "Charlotte Strange").fadeIn();
        })
    })
});
