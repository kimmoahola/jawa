(this.webpackJsonpjawa=this.webpackJsonpjawa||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),s=(a(18),a(19),a(3)),o=a.n(s),u=a(4),l=a(5),p=a(8);function f(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var a=0;a<e.attributes.length;a+=1){var n=e.attributes.item(a);t["@attributes"][n.nodeName]=n.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r+=1){var c=e.childNodes.item(r),i=c.nodeName;if("undefined"===typeof t[i])t[i]=f(c);else{if("undefined"===typeof t[i].push){var s=t[i];t[i]=[],t[i].push(s)}t[i].push(f(c))}}return t}var m=a(22),d=a(23),v=a(29),b=a(10),h=a(24),O=a(25);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e){return Object.keys(e).map((function(t){return[t,e[t]]})).sort((function(e,t){return e[0]-t[0]}))}function E(e){var t=e.tsByValuesObject;return y(Object.keys(t).reduce((function(e,a){var n=t[a],r=Object(m.a)(a),c=Object(d.a)(r),i=Object(v.a)(c),s=Object(v.a)(Object(b.a)(r));return e[s]=j({},e[s],Object(p.a)({},i,j({},e[s]?e[s][i]:{},{},n))),e}),{})).map((function(e){return{startOfDay:Object(m.a)(e[0]),items:y(e[1]).map((function(e){return j({ts:Object(m.a)(e[0])},e[1])}))}}))}function g(e){var t=e.responseData;return(t&&t["wfs:FeatureCollection"]&&t["wfs:FeatureCollection"]["wfs:member"]||[]).reduce((function(e,t){var a=t["BsWfs:BsWfsElement"],n=new Date(a["BsWfs:Time"]),r=Object(v.a)(n),c=a["BsWfs:ParameterName"],i=Number(a["BsWfs:ParameterValue"]);return e[r]=j({},e[r],{},Object(p.a)({},c,i)),e}),{})}function D(e){var t=y(e.obj),a=t[t.length-1];return{key:a&&a[0],value:a&&a[1]}}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,e.next=3,fetch(a);case 3:return n=e.sent,e.t0=f,e.t1=new DOMParser,e.next=8,n.text();case 8:return e.t2=e.sent,e.t3=e.t1.parseFromString.call(e.t1,e.t2,"text/xml"),e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t){var a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,n=Object(h.a)(new Date,-1).toISOString(),r=Object(O.a)(Object(h.a)(new Date,72)).toISOString(),e.next=5,N({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=".concat(a,"&parameters=temperature,windspeedms,precipitation1h&starttime=").concat(n,"&endtime=").concat(r)});case 5:return c=e.sent,e.abrupt("return",E({tsByValuesObject:g({responseData:c})}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(o.a.mark((function e(t){var a,n,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.place,n=Object(h.a)(new Date,-1).toISOString(),e.next=4,N({url:"https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=".concat(a,"&parameters=temperature,windspeedms,precipitation1h&starttime=").concat(n)});case 4:return r=e.sent,c=D({obj:g({responseData:r})}),i=c.key,s=c.value,e.abrupt("return",i&&s&&j({ts:Object(m.a)(i)},s));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=36e5,P=12e5,B=[8,16,19];function H(e){var t=e.temperature;return isNaN(t)?"(ei l\xe4mp\xf6tilatietoa)":r.a.createElement("div",{className:"temperature"},r.a.createElement("span",{className:"temperature-number"},Math.round(t)),r.a.createElement("span",{className:"temperature-degree"},"\xb0C"))}function V(e){var t=e.precipitation1h,a="",n="";return isNaN(t)?(a="light-text",n="(ei sadetietoa)"):t>1?(a="warning-text",n="Voimakas sade (".concat(t.toFixed(1)," mm/h)")):t>.3?n="Kohtalainen sade":t>0&&(a="light-text",n="Heikko sade"),r.a.createElement("div",{className:a},n)}function A(e){var t=e.windspeedms,a="",n="";return isNaN(t)?(a="light-text",n="(ei tuulitietoa)"):t>6?(a="warning-text",n="Navakka tuuli (".concat(Math.round(t)," m/s)")):t>4.5?n="Kohtalainen tuuli":t>3&&(a="light-text",n="Heikko tuuli"),r.a.createElement("div",{className:a},n)}function R(e){var t,a,n=e.temperature,c=e.windspeedms,i="",s="";if(isNaN(n)||isNaN(c))s="";else{var o=(a=c,13.12+.6215*(t=n)-13.956*Math.pow(a,.16)+.4867*t*Math.pow(a,.16)),u=Math.abs(o-n);u<3?s="":(s="Tuntuu kuin ".concat(Math.round(o),"\xb0C"),i=u>7?"warning-text":"light-text")}return r.a.createElement("div",{className:i},s)}function C(e){var t=e.temperature,a=e.windspeedms,n=e.precipitation1h;return r.a.createElement("div",null,r.a.createElement(H,{temperature:t}),r.a.createElement(R,{temperature:t,windspeedms:a}),r.a.createElement(A,{windspeedms:a}),r.a.createElement(V,{precipitation1h:n}))}var I=a(27);function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{includeMinutes:!1},t=e.ts,a=e.includeMinutes?"HH:mm":"H";return r.a.createElement("div",{className:"time"},"klo ",Object(I.a)(t,a))}var _=a(26),q=a(28);function K(e){var t=e.ts;return r.a.createElement(r.a.Fragment,null,["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"][t.getDay()]," - ",Object(_.a)(t)?"T\xe4n\xe4\xe4n":Object(q.a)(t)?"Huomenna":Object(I.a)(t,"d.MM."))}var L=a(7);function J(e){var t=e.dayData,a=function(e){var t=e.items,a=e.startOfDay,n=[new Date,Object(h.a)(new Date,1),Object(h.a)(new Date,2)].filter((function(e){return Object(L.a)(e,a)})).map((function(e){return e.getHours()})).concat(B);return t.filter((function(e){return-1!==n.indexOf(e.ts.getHours())}))}({items:t.items,startOfDay:t.startOfDay});return 0===a.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forecast-date"},r.a.createElement(K,{ts:t.startOfDay})),r.a.createElement("div",{className:"weather-container"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item"},r.a.createElement(W,{ts:e.ts}),r.a.createElement("div",{className:"weather-values"},r.a.createElement(C,{temperature:e.temperature,windspeedms:e.windspeedms,precipitation1h:e.precipitation1h})))}))))}function $(e){var t=e.data;return t?r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(J,{key:t,dayData:e})}))):null}function z(e){var t=e.place,a=(e.observationData,e.forecastData);return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement($,{data:a})))}var G=3e4;function Q(e){var t=e.place,a=Object(n.useState)(void 0),c=Object(l.a)(a,2),i=c[0],s=c[1],p=Object(n.useState)(void 0),f=Object(l.a)(p,2),m=f[0],d=f[1],v=Object(n.useState)(void 0),b=Object(l.a)(v,2),h=b[0],O=b[1],w=Object(n.useState)(void 0),j=Object(l.a)(w,2),y=j[0],E=j[1],g=Object(n.useState)(0),D=Object(l.a)(g,2),N=D[0],k=D[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return k((function(e){return e+1}))}),G);return function(){return clearTimeout(e)}}),[N]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,x({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a={forecastData:!!i,lastForecastDataAttempt:m,"Date.now() - lastForecastDataAttempt":m&&Date.now()-m,FORECAST_REFRESH_INTERVAL:M};!i||i&&m&&Date.now()-m>M?(console.log("Need forecast data refresh",a),d(Date.now()),function(){e.apply(this,arguments)}()):console.log("No need for forecast data refresh",a)}),[N,t]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,T({place:t});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a={observationData:!!h,lastObservationDataAttempt:y,"Date.now() - lastObservationDataAttempt":y&&Date.now()-y,OBSERVATION_REFRESH_INTERVAL:P};!h||h&&y&&Date.now()-y>P?(console.log("Need observation data refresh",a),E(Date.now()),function(){e.apply(this,arguments)}()):console.log("No need for observation data refresh",a)}),[N,t]),r.a.createElement(z,{place:t,observationData:h,forecastData:i})}var U="Tampere";var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q,{place:U}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.2d4b3c47.chunk.js.map