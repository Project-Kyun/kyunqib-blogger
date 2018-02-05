/*<![CDATA[*/
jQuery(document).ready(function(t){t(".multitab-widget-content-widget-id").hide(),t("ul.multitab-widget-content-tabs-id li:first a").addClass("multitab-widget-current").show(),t(".multitab-widget-content-widget-id:first").show(),t("ul.multitab-widget-content-tabs-id li a").click(function(){t("ul.multitab-widget-content-tabs-id li a").removeClass("multitab-widget-current a"),t(this).addClass("multitab-widget-current"),t(".multitab-widget-content-widget-id").hide();var i=t(this).attr("href");return t(i).fadeIn(),!1})});
/*]]>*/
