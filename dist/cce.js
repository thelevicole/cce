"use strict";(function(a){"use strict";a.fn.cursorElement=function(b){var c=this;b=a.extend(!0,{offsetX:0,offsetY:0,preserveCursor:!1},b),c.css({position:"fixed","pointer-events":"none","z-index":99999}),b.preserveCursor||a("head").append(a("<style>",{text:"*, *:before, *:after { cursor: none; }"}));var d=0,e=0,f=a(window).width(),g=a(window).height(),h="",i="",j=!0;a(document).on("ready mousemove resize",function(b){var c=a(b.target);f=a(window).width(),g=a(window).height(),d=b.clientX,e=b.clientY,h=c.attr("id")||c.closest("[id]").attr("id")||"",i=c.prop("nodeName").toLowerCase()}),a(document).on("mouseout mouseover",function(){j="mouseover"===event.type}),a("iframe").on("mouseover mouseout",function(a){j="mouseout"===a.type}),a(document).on("mousedown mouseup",function(a){var b="";"mousedown"===a.type&&(b="click"),c.attr("data-event",b)}),window.requestAnimationFrame(function a(){var k=100*((d+b.offsetX)/f),l=100*((e+b.offsetY)/g);j?c.show():c.hide(),c.css({top:l+"%",left:k+"%"}),c.attr("data-id",h),c.attr("data-el",i),window.requestAnimationFrame(a)})}})(jQuery||window.jQuery);