(function(window){var svgSprite='<svg><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M698.514286 939.885714H329.142857c-47.542857 0-80.457143-32.914286-80.457143-80.457143V153.6v-3.657143C256 106.057143 288.914286 73.142857 329.142857 73.142857h365.714286c47.542857 0 80.457143 32.914286 80.457143 80.457143v709.485714c0 43.885714-32.914286 76.8-76.8 76.8zM321.828571 157.257143v702.171428c0 3.657143 3.657143 7.314286 7.314286 7.314286h369.371429l3.657143-3.657143V153.6c0-3.657143-3.657143-7.314286-7.314286-7.314286H329.142857c-3.657143 0-7.314286 3.657143-7.314286 10.971429z" fill="" ></path><path d="M731.428571 256H292.571429c-21.942857 0-36.571429-14.628571-36.571429-36.571429s14.628571-36.571429 36.571429-36.571428h438.857142c21.942857 0 36.571429 14.628571 36.571429 36.571428s-14.628571 36.571429-36.571429 36.571429zM731.428571 731.428571H292.571429c-21.942857 0-36.571429-14.628571-36.571429-36.571428s14.628571-36.571429 36.571429-36.571429h438.857142c21.942857 0 36.571429 14.628571 36.571429 36.571429s-14.628571 36.571429-36.571429 36.571428zM548.571429 841.142857h-73.142858c-21.942857 0-36.571429-14.628571-36.571428-36.571428s14.628571-36.571429 36.571428-36.571429h73.142858c21.942857 0 36.571429 14.628571 36.571428 36.571429s-14.628571 36.571429-36.571428 36.571428z" fill="" ></path></symbol><symbol id="icon-suo" viewBox="0 0 1024 1024"><path d="M780.16 1024H243.84a170.88 170.88 0 0 1-170.688-170.688V536.384A170.88 170.88 0 0 1 243.84 365.696h536.384a170.816 170.816 0 0 1 170.624 170.688v316.928A170.88 170.88 0 0 1 780.16 1024zM243.84 414.464a121.984 121.984 0 0 0-121.92 121.92v316.928c0 67.264 54.656 121.984 121.92 121.984h536.384c67.2 0 121.856-54.72 121.856-121.984V536.384a121.984 121.984 0 0 0-121.856-121.92H243.84z" fill="#4D4D4D" ></path><path d="M243.84 414.464a24.32 24.32 0 0 1-24.384-24.384V268.16C219.456 118.72 343.68 1.472 502.912 0h3.008c156.608 1.472 274.304 116.288 274.304 268.16v48.768a24.32 24.32 0 0 1-48.768 0V268.16c0-124.608-97.536-218.688-227.072-219.456C371.84 49.472 268.16 145.6 268.16 268.16v121.92a24.32 24.32 0 0 1-24.32 24.384zM512 804.544a146.432 146.432 0 0 1-146.304-146.24A146.496 146.496 0 0 1 512 512a146.496 146.496 0 0 1 146.304 146.304A146.496 146.496 0 0 1 512 804.544z m0-243.776c-53.76 0-97.536 43.776-97.536 97.536S458.176 755.904 512 755.904c53.76 0 97.536-43.776 97.536-97.536S565.696 560.768 512 560.768z" fill="#4D4D4D" ></path><path d="M512 902.144a24.448 24.448 0 0 1-24.384-24.448v-73.152c0-13.44 10.944-24.448 24.384-24.448s24.384 11.008 24.384 24.448v73.152a24.448 24.448 0 0 1-24.384 24.448z" fill="#4D4D4D" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)