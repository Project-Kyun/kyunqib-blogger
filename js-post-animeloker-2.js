//<![CDATA[
//*This File From KyunQIB AnimeLoker Website*//
$('#srv01').click(function(){
  if ($(this).find('i').attr('class') == 'fa fa-folder') {
    $(this).find('i').attr('class', 'fa fa-folder-open');
    $(this).css('color', '#fff');
    $('#ntnep01').css('display', 'inline-block');
  $('#ntnep02').css('display', 'none');
  $('#srv02').find('i').attr('class', 'fa fa-folder');
  $('#srv02').css('color', '#000');
$('.nonton').css('margin-bottom', '10px');
} else {
  $(this).find('i').attr('class', 'fa fa-folder');
  $(this).css('color', '#000');
  $('#ntnep01').css('display', 'none');
$('.nonton').css('margin-bottom', '50px');
}
});
$('#srv02').click(function(){
  if ($(this).find('i').attr('class') == 'fa fa-folder') {
    $(this).find('i').attr('class', 'fa fa-folder-open');
    $(this).css('color', '#fff');
    $('#ntnep02').css('display', 'inline-block');
  $('#ntnep01').css('display', 'none');
  $('#srv01').find('i').attr('class', 'fa fa-folder');
  $('#srv01').css('color', '#000');
$('.nonton').css('margin-bottom', '10px');
} else {
  $(this).find('i').attr('class', 'fa fa-folder');
  $(this).css('color', '#000');
  $('#ntnep02').css('display', 'none');
$('.nonton').css('margin-bottom', '50px');
}
});
$(document).ready(function(){
 $('.ntnep').find('a').each(function() {
 this.title = this.title.return('&cylnders=12')
 this.title = this.title.replace('https://drive.google.com/open?id=', 'https://drive.google.com/file/d/');
 this.title = this.title.replace('https://www.mp4upload.com/', 'https://www.mp4upload.com/');
 });
$('.dlxx').find('a[title]').each(function() {
 this.title = this.title.replace('https://www.mp4upload.com/', 'https://www.mp4upload.com/');
});
});
$('.dlxx').find('a[title]').click(function(){
var imgsr = $('.ulx').find('img').attr('src');
var hsl = this.title;
 $('#str').attr('src', hsl);
 $('#strem').slideDown(1000);
});
$('.ntnep').find('a').click(function(){
var imgsr = $('.ulx').find('img').attr('src');
var hsl = this.title;
 $('#ntn').attr('src', hsl);
 $('.nton').slideDown(1000);
});
$(document).ready(function(){
    $('a').each(function(){
        this.title = this.title.replace('https://oload.tv', 'https://oload.stream');
    });
});
//]]>
