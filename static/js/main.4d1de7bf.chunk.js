(this.webpackJsonpjawa=this.webpackJsonpjawa||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),c=a.n(s),o=(a(18),a(19),a(3)),i=a.n(o),u=a(4),l=a(5),m=36e5,f=12e5,p=[8,16,19];function d(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var a=0;a<e.attributes.length;a+=1){var n=e.attributes.item(a);t["@attributes"][n.nodeName]=n.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r+=1){var s=e.childNodes.item(r),c=s.nodeName;if("undefined"===typeof t[c])t[c]=d(s);else{if("undefined"===typeof t[c].push){var o=t[c];t[c]=[],t[c].push(o)}t[c].push(d(s))}}return t}var v=a(28),h=a(8),b=a(22),w=a(23),E=a(24),O=function(e){for(var t=e.forecast,a={},n=0;n<t.length;n++){var r=t[n];if(-1!==p.indexOf(r.ts.getHours())){var s=Object(v.a)(Object(h.a)(r.ts)),c=s in a&&a[s]||(a[s]={items:[]});c.items||(c.items=[]),c.items.push({ts:r.ts,temp:r.temp})}}var o=Object.keys(a).map((function(e){return[e,a[e]]}));return o.sort((function(e,t){return e[0]-t[0]})),o.map((function(e){return{startOfDay:Object(b.a)(e[0]),items:e[1].items}}))};function N(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,e.next=3,fetch(a);case 3:return n=e.sent,e.t0=d,e.t1=new DOMParser,e.next=8,n.text();case 8:return e.t2=e.sent,e.t3=e.t1.parseFromString.call(e.t1,e.t2,"text/xml"),e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,n=Object(w.a)(Object(E.a)(Date.now(),48)),e.next=4,N({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=".concat(a,"&parameters=temperature&endtime=").concat(n.toISOString())});case 4:return r=e.sent,e.abrupt("return",r["wfs:FeatureCollection"]&&r["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(r["wfs:FeatureCollection"]["@attributes"].timeStamp),forecast:O({forecast:r["wfs:FeatureCollection"]["wfs:member"].map((function(e){return{ts:new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}}))})}:{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,n=Object(E.a)(Date.now(),-1),e.next=4,N({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=".concat(a,"&parameters=temperature&starttime=").concat(n.toISOString())});case 4:return r=e.sent,e.abrupt("return",r["wfs:FeatureCollection"]&&r["wfs:FeatureCollection"]["wfs:member"]?{ts:new Date(r["wfs:FeatureCollection"]["@attributes"].timeStamp),observation:{ts:new Date(r["wfs:FeatureCollection"]["wfs:member"][r["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:Time"]),temp:Number(r["wfs:FeatureCollection"]["wfs:member"][r["wfs:FeatureCollection"]["wfs:member"].length-1]["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])}}:{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.temp;return r.a.createElement("span",{className:"temperature"},r.a.createElement("span",{className:"temperature-number"},Math.round(t)),r.a.createElement("span",{className:"temperature-degree"},"\xb0C"))}var S=a(26);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{includeMinutes:!1},t=e.ts,a=e.temp,n=e.includeMinutes;return r.a.createElement("div",null,r.a.createElement("span",{className:"time"},"klo ",Object(S.a)(t,"HH"+(n?":mm":""))),isNaN(a)?"N/A":r.a.createElement(x,{temp:Math.round(a)}))}function B(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"forecast-date"},"Nyt"),r.a.createElement("div",{className:"weather-item"},t?r.a.createElement(k,{ts:t.observation.ts,temp:t.observation.temp,includeMinutes:!0}):"N/A"))}var C=a(12),W=a(25),A=a(27);function T(e){var t=e.ts;return r.a.createElement(r.a.Fragment,null,Object(S.a)(t,"EEEE - "),Object(W.a)(t)?"T\xe4n\xe4\xe4n":Object(A.a)(t)?"Huomenna":Object(S.a)(t,"d.MM."))}function M(e){var t=e.data;return r.a.createElement("div",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.forecast.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"forecast-date"},r.a.createElement(T,{ts:e.startOfDay})),r.a.createElement("div",{className:"weather-container"},Object(C.a)(Array(p.length-e.items.length).keys()).map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item weather-item-empty"})})),e.items.map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item"},r.a.createElement(k,{ts:e.ts,temp:e.temp}))}))))})))):"")}function R(e){var t=e.place,a=e.observationData,n=e.forecastData;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement(B,{data:a}),r.a.createElement(M,{data:n,className:"weather-item"})))}var V=3e4;function H(e){var t=e.place,a=Object(n.useState)(void 0),s=Object(l.a)(a,2),c=s[0],o=s[1],p=Object(n.useState)(void 0),d=Object(l.a)(p,2),v=d[0],h=d[1],b=Object(n.useState)(void 0),w=Object(l.a)(b,2),E=w[0],O=w[1],N=Object(n.useState)(void 0),j=Object(l.a)(N,2),g=j[0],F=j[1],x=Object(n.useState)(0),S=Object(l.a)(x,2),k=S[0],B=S[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return B((function(e){return e+1}))}),V);return function(){return clearTimeout(e)}}),[k]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,y({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a={forecastData:!!c,lastForecastDataAttempt:v,"Date.now() - lastForecastDataAttempt":v&&Date.now()-v,FORECAST_REFRESH_INTERVAL:m};!c||c&&v&&Date.now()-v>m?(console.log("Need forecast data refresh",a),h(Date.now()),function(){e.apply(this,arguments)}()):console.log("No need for forecast data refresh",a)}),[k,t]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,D({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a={observationData:!!E,lastObservationDataAttempt:g,"Date.now() - lastObservationDataAttempt":g&&Date.now()-g,OBSERVATION_REFRESH_INTERVAL:f};!E||E&&g&&Date.now()-g>f?(console.log("Need observation data refresh",a),F(Date.now()),function(){e.apply(this,arguments)}()):console.log("No need for observation data refresh",a)}),[k,t]),r.a.createElement(R,{place:t,observationData:E,forecastData:c})}var I="Tampere";var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(H,{place:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4d1de7bf.chunk.js.map