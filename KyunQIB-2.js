// Streaming
setTimeout(function(){$("#myVideo").each(function(){$(this).replaceWith('<iframe class="video-xx loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="410" width="727"></iframe>')})},5e3);
// Streaming fallback
var isAdsDisplayed = true;
// Onclick Notif
$('.post-body a').each(function () {var $this = $(this),href = $this.attr('href');$this.attr("onClick", "alert('Ka, jangan lupa kasih komentar ya, sebagai bentuk apresiasi dan penyemangat kami, juga supaya Blog Ini terlihat hidup =w=')");});
// Disqus Comment
var disqus_shortname="kyunqib";var disqus_url=disqus_blogger_current_url;(function(){var d=function(){var e=document.getElementById("comments");if(!e){e=document.getElementById("disqus-blogger-comment-block")}
return e};var b=d();if(!!b){var c=document.createElement("div");c.id="disqus_thread";b.innerHTML="";b.appendChild(c);b.style.display="block";var a=document.createElement("script");a.async=!0;a.src="//"+disqus_shortname+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.body).appendChild(a)}})()
// View
document.getElementById("wtchz").appendChild(document.getElementById("wtchzz"));
