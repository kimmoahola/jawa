(this.webpackJsonpjawa=this.webpackJsonpjawa||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),i=(a(21),a(22),a(3)),u=a.n(i),o=a(4),l=a(5),m=36e5,f=12e5,p=[8,16,19];function d(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var a=0;a<e.attributes.length;a+=1){var n=e.attributes.item(a);t["@attributes"][n.nodeName]=n.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r+=1){var s=e.childNodes.item(r),c=s.nodeName;if("undefined"===typeof t[c])t[c]=d(s);else{if("undefined"===typeof t[c].push){var i=t[c];t[c]=[],t[c].push(i)}t[c].push(d(s))}}return t}var h=a(31),v=a(10),w=a(25),b=a(26),E=a(27),O=function(e){for(var t=e.forecast,a={},n=0;n<t.length;n++){var r=t[n];if(-1!==p.indexOf(r.ts.getHours())){var s=Object(h.a)(Object(v.a)(r.ts)),c=s in a&&a[s]||(a[s]={items:[]});c.items||(c.items=[]),c.items.push({ts:r.ts,temp:r.temp})}}var i=Object.keys(a).map((function(e){return[e,a[e]]}));return i.sort((function(e,t){return e[0]-t[0]})),i.map((function(e){return{startOfDay:Object(w.a)(e[0]),items:e[1].items}}))};function y(e){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,e.next=3,fetch(a);case 3:return n=e.sent,e.t0=d,e.t1=new DOMParser,e.next=8,n.text();case 8:return e.t2=e.sent,e.t3=e.t1.parseFromString.call(e.t1,e.t2,"text/xml"),e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,n=Object(b.a)(Object(E.a)(Date.now(),48)),e.next=4,y({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=".concat(a,"&parameters=temperature&endtime=").concat(n.toISOString())});case 4:return r=e.sent,e.abrupt("return",r["wfs:FeatureCollection"]&&r["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(r["wfs:FeatureCollection"]["@attributes"].timeStamp),forecast:O({forecast:r["wfs:FeatureCollection"]["wfs:member"].map((function(e){return{ts:new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}}))})}:{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,(n=new Date(Date.now())).setTime(n.getTime()-36e5),e.next=5,y({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=".concat(a,"&parameters=temperature&starttime=").concat(n.toISOString())});case 5:return r=e.sent,e.abrupt("return",r["wfs:FeatureCollection"]&&r["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(r["wfs:FeatureCollection"]["@attributes"].timeStamp),observation:{ts:new Date(r["wfs:FeatureCollection"]["wfs:member"][r["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(r["wfs:FeatureCollection"]["wfs:member"][r["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}}:{});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){var t=e.temp;return r.a.createElement("span",{className:"temperature"},r.a.createElement("span",{className:"temperature-number"},Math.round(t)),r.a.createElement("span",{className:"temperature-degree"},"\xb0C"))}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{includeMinutes:!1},t=e.ts,a=e.temp,n=e.includeMinutes;return r.a.createElement("div",null,r.a.createElement("span",{className:"time"},"klo ",t.getHours(),n?":"+t.getMinutes():""," "),r.a.createElement(D,{temp:Math.round(a)}))}a(13);var B=a(29),C=a(28),W=a(30);function T(e){var t=e.ts;return r.a.createElement(r.a.Fragment,null,Object(B.a)(t,"EEEE - "),Object(C.a)(t)?"T\xe4n\xe4\xe4n":Object(W.a)(t)?"Huomenna":Object(B.a)(t,"d.MM."))}function S(e){var t=e.data;return r.a.createElement("div",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forecast-date"},"Nyt"),r.a.createElement("div",{className:"weather-item"},r.a.createElement(k,{ts:t.observation.ts,temp:t.observation.temp,includeMinutes:!0}))):"")}var M=a(14);function V(e){var t=e.data;return r.a.createElement("div",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.forecast.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"forecast-date"},r.a.createElement(T,{ts:e.startOfDay})),r.a.createElement("div",{className:"weather-container"},Object(M.a)(Array(p.length-e.items.length).keys()).map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item weather-item-empty"})})),e.items.map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item"},r.a.createElement(k,{ts:e.ts,temp:e.temp}))}))))})))):"")}function q(e){var t=e.place,a=e.observationData,n=e.forecastData;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement(S,{data:a}),r.a.createElement(V,{data:n,className:"weather-item"})))}var A=3e4;function H(e){var t=e.place,a=Object(n.useState)(void 0),s=Object(l.a)(a,2),c=s[0],i=s[1],p=Object(n.useState)(void 0),d=Object(l.a)(p,2),h=d[0],v=d[1],w=Object(n.useState)(0),b=Object(l.a)(w,2),E=b[0],O=b[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return O((function(e){return e+1}))}),A);return function(){return clearTimeout(e)}}),[E]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,j({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(!c||c&&c.ts&&Date.now()-c.ts>m)&&function(){e.apply(this,arguments)}()}),[E,t,c]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,F({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(!h||h&&h.ts&&Date.now()-h.ts>f)&&function(){e.apply(this,arguments)}()}),[E,t,h]),r.a.createElement(q,{place:t,observationData:h,forecastData:c})}var I="Tampere";var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(H,{place:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e09f56bc.chunk.js.map