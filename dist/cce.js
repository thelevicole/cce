"use strict";(function(a){"use strict";a.fn.cursorElement=function(b){var c=this;b=a.extend(!0,{offsetX:0,offsetY:0,preserveCursor:!1},b),c.css({position:"fixed","pointer-events":"none","z-index":99999}),b.preserveCursor||a("head").append(a("<style>",{text:"*, *:before, *:after { cursor: none; }"}));var d=0,e=0,f=a(window).width(),g=a(window).height(),h="",i="";a(document).on("ready mousemove resize",function(b){var c=a(b.target);f=a(window).width(),g=a(window).height(),d=b.clientX,e=b.clientY,h=c.attr("id")||c.closest("[id]").attr("id")||"",i=c.prop("nodeName").toLowerCase()}),a(document).on("mouseleave",function(){c.hide()}),a("iframe").on("mouseenter",function(){c.hide()}),a(document).on("mousedown mouseup",function(a){var b="";"mousedown"===a.type&&(b="click"),c.attr("data-event",b)}),window.requestAnimationFrame(function a(){var j=100*((d+b.offsetX)/f),k=100*((e+b.offsetY)/g);c.show().css({top:k+"%",left:j+"%"}),c.attr("data-id",h),c.attr("data-el",i),window.requestAnimationFrame(a)})}})(jQuery||window.jQuery);