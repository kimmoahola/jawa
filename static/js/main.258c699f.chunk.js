(this.webpackJsonpjawa=this.webpackJsonpjawa||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(5),o=n.n(s),c=(n(12),n(13),n(2)),u=n.n(c),i=n(3),l=n(1),f=n(6);function m(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n+=1){var a=e.attributes.item(n);t["@attributes"][a.nodeName]=a.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r+=1){var s=e.childNodes.item(r),o=s.nodeName;if("undefined"===typeof t[o])t[o]=m(s);else{if("undefined"===typeof t[o].push){var c=t[o];t[o]=[],t[o].push(c)}t[o].push(m(s))}}return t}var p=18e5;function d(e){var t=e.ts,n=e.temp;return r.a.createElement("div",null,t.toLocaleString("fi-FI"),": ",n)}function w(e){var t=e.place,n=Object(a.useState)(void 0),s=Object(l.a)(n,2),o=s[0],c=s[1],f=Object(a.useState)(0),w=Object(l.a)(f,2),h=w[0],b=w[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return b((function(e){return e+1}))}),p);return function(){return clearTimeout(e)}}),[h]),Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var n,a,r,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Date(Date.now())).setTime(n.getTime()-36e5),e.next=4,fetch("https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=".concat(t,"&parameters=temperature&starttime=").concat(n.toISOString()));case 4:return a=e.sent,e.next=7,a.text();case 7:r=e.sent,s=(new DOMParser).parseFromString(r,"text/xml"),o=m(s),c(o["wfs:FeatureCollection"]&&o["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(o["wfs:FeatureCollection"]["@attributes"].timeStamp),observation:{ts:new Date(o["wfs:FeatureCollection"]["wfs:member"][o["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(o["wfs:FeatureCollection"]["wfs:member"][o["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}}:{});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h,t]),r.a.createElement("div",null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{ts:o.observation.ts,temp:o.observation.temp})):"")}var h=function(e){for(var t=[8,16,19],n=[],a=0;a<e.length;a++){var r=e[a];-1!==t.indexOf(r.ts.getHours())&&n.push(r)}return n};function b(e){var t=e.place,n=Object(a.useState)(void 0),s=Object(l.a)(n,2),o=s[0],c=s[1],f=Object(a.useState)(0),b=Object(l.a)(f,2),E=b[0],g=b[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return g((function(e){return e+1}))}),p);return function(){return clearTimeout(e)}}),[E]),Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var n,a,r,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Date(Date.now())).setTime(n.getTime()+1728e5),e.next=4,fetch("https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=".concat(t,"&parameters=temperature&endtime=").concat(n.toISOString()));case 4:return a=e.sent,e.next=7,a.text();case 7:r=e.sent,s=(new DOMParser).parseFromString(r,"text/xml"),o=m(s),c(o["wfs:FeatureCollection"]&&o["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(o["wfs:FeatureCollection"]["@attributes"].timeStamp),forecast:h(o["wfs:FeatureCollection"]["wfs:member"].map((function(e){return{ts:new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}})))}:{});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[E,t]),r.a.createElement("div",null,r.a.createElement("p",null,"Forecast of"),r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement(w,{place:t}),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,o.forecast.map((function(e,t){return r.a.createElement(d,{key:t,ts:e.ts,temp:e.temp})}))),r.a.createElement(v,{ts:o.ts})):""))}function v(e){var t=e.ts,n=Object(a.useState)(0),s=Object(l.a)(n,2),o=s[0],c=s[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return c((function(e){return e+1}))}),3e4);return function(){return clearTimeout(e)}}),[o]),r.a.createElement("p",null,"Last updated ",Object(f.a)(new Date,t)," ago.")}var E="Tampere";var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,{place:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.258c699f.chunk.js.map