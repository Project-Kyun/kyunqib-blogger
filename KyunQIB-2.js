// Streaming
setTimeout(function(){$("#myVideo").each(function(){$(this).replaceWith('<iframe class="video-xx loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="410" width="727"></iframe>')})},5e3);
// Streaming fallback
var isAdsDisplayed = true;
// Onclick Notif
$('.post-body a').each(function () {var $this = $(this),href = $this.attr('href');$this.attr("onClick", "alert('Ka, jangan lupa kasih komentar ya, sebagai bentuk apresiasi dan penyemangat kami, juga supaya Blog Ini terlihat hidup =w=')");});
// Disqus Comment
function load_Comments(){var e=document.getElementById("disqus-kyun");e.style.display="inline-block";var t="kyunqib";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://"+t+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}var disqus_shortname="kyunqib";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
