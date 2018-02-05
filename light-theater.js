/*<![CDATA[*/
$(document).ready(function(){$("#lampustreaming").css("height",$(document).height()).hide(),$(".gantiLamp").click(function(){$("#lampustreaming").toggle(),$("#lampustreaming").is(":hidden")?$(this).html("Turn off the Lights").removeClass("udahOFF"):$(this).html("Turn on the Lights").addClass("udahOFF")})}),$(document).ready(function(){$("#theaterbutn").click(function(){$(".toogletheater").toggleClass("theateractive"),$("body iframe").toggleClass("theateractive")})});
/*]]>*/
