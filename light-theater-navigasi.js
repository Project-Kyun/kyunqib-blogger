/*<![CDATA[*/
// Light Button
$(document).ready(function(){$("#lampustreaming").css("height", $(document).height()).hide();$(".gantiLamp").click(function(){$("#lampustreaming").toggle();if ($("#lampustreaming").is(":hidden"))$(this).html("Turn off the Lights").removeClass("udahOFF");else $(this).html("Turn on the Lights").addClass("udahOFF");});});
// Theater Mode
$(document).ready(function(){
    $("#theaterbutn").click(function(){
        $(".toogletheater").toggleClass("theateractive");
        $("body iframe").toggleClass("theateractive");
    });
});
// Navigasi
!function(t){var e=t("a.blog-pager-newer-link"),r=t("a.blog-pager-older-link");t.get(e.attr("href"),function(r){var i=1==t(r).find(".post-body").length?"<img alt='"+t(r).find(".post-title").text()+"' src='"+t(r).find(".post-body img:first").attr("src",function(t,e){return e.replace(/.*?:\/\//g,"//").replace("s1600","s386")}).attr("src")+"' class='pager-thumb' width='386' height='100'/>":"";e.html(i+"<div><h6>Next</h6><h5>"+t(r).find(".post-title").text()+"</h5></div>")},"html"),t.get(r.attr("href"),function(e){var i=1==t(e).find(".post-body").length?"<img alt='"+t(e).find(".post-title").text()+"' src='"+t(e).find(".post-body img:first").attr("src",function(t,e){return e.replace(/.*?:\/\//g,"//").replace("s1600","s386")}).attr("src")+"' class='pager-thumb' width='386' height='100'/>":"";r.html(i+"<div><h6>Previous</h6><h5>"+t(e).find(".post-title").text()+"</h5></div>")},"html")}(jQuery);
/*]]>*/
