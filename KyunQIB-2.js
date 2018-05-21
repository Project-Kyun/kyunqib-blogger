// Streaming
setTimeout(function(){$("#myVideo").each(function(){$(this).replaceWith('<iframe class="video-xx loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="410" width="727"></iframe>')})},5e3);
// Streaming fallback
if(window.isAdsDisplayed === undefined ) {$('._humu-xx').hide();$('#myOverlay').show();} else {$('._humu-xx').show();$('#myOverlay').hide();}
// Related Post
$(document).ready(function() {$('#_rec-post ul li img').attr('data-src', function(i, src){return src.replace( 's72-c', 'w175-h112-c' );});});
// Onclick Notif
$('.post-body a').each(function () {var $this = $(this),href = $this.attr('href');$this.attr("onClick", "alert('Ka, jangan lupa kasih komentar ya, sebagai bentuk apresiasi dan penyemangat kami, juga supaya Blog Ini terlihat hidup =w=')");});
// Disqus Comment
var disqus_shortname="kyunqib";var disqus_url=disqus_blogger_current_url;(function(){var d=function(){var e=document.getElementById("comments");if(!e){e=document.getElementById("disqus-blogger-comment-block")}return e};var b=d();if(!!b){var c=document.createElement("div");c.id="disqus_thread";b.innerHTML="";b.appendChild(c);b.style.display="block";var a=document.createElement("script");a.async=!0;a.src="//"+disqus_shortname+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.body).appendChild(a)}})();!function(b,g,a){var d,f=b.getElementsByTagName(g)[0];b.getElementById(a)||(d=b.createElement(g),d.id=a,d.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",f.parentNode.insertBefore(d,f))}(document,"script","facebook-jssdk");var divs=["disqus-box","blogger-box","facebook-box"];var visibleDivId=null;function toggleVisibility(a){if(visibleDivId===a){visibleDivId=null}else{visibleDivId=a}hideNonVisibleDivs()}function hideNonVisibleDivs(){var b,a,c;for(b=0;b<divs.length;b++){a=divs[b];c=document.getElementById(a);if(visibleDivId===a){c.style.display="block"}else{c.style.display="none"}}}$(".commentbtn").click(function(a){$(this).addClass("btncurrent").siblings().removeClass("btncurrent")})
document.getElementById("wtchz").appendChild(document.getElementById("wtchzz"));
