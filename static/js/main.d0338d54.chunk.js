(this.webpackJsonpjawa=this.webpackJsonpjawa||[]).push([[0],{20:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),o=(n(25),n(26),n(3)),u=(n(27),n(6)),s=n.n(u),l=n(9),m=n(8);function f(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n+=1){var a=e.attributes.item(n);t["@attributes"][a.nodeName]=a.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r+=1){var i=e.childNodes.item(r),c=i.nodeName;if("undefined"===typeof t[c])t[c]=f(i);else{if("undefined"===typeof t[c].push){var o=t[c];t[c]=[],t[c].push(o)}t[c].push(f(i))}}return t}function p(e,t,n){var a,r,i;if(0===t)a=r=i=n;else{var c=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},o=n<.5?n*(1+t):n+t-n*t,u=2*n-o;a=c(u,o,e+1/3),r=c(u,o,e),i=c(u,o,e-1/3)}return[Math.round(255*a),Math.round(255*r),Math.round(255*i)]}function d(e,t,n){var a=((2*n-1)/1+1)/2,r=1-a;return[Math.round(e[0]*a+t[0]*r),Math.round(e[1]*a+t[1]*r),Math.round(e[2]*a+t[2]*r)]}var b=n(31),O=n(32),v=n(39),h=n(16),g=n(33),j=n(34);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return Object.keys(e).map((function(t){return[t,e[t]]})).sort((function(e,t){return e[0]-t[0]}))}function N(e){var t=e.tsByValuesObject;return E(Object.keys(t).reduce((function(e,n){var a=t[n],r=Object(b.a)(n),i=Object(O.a)(r),c=Object(v.a)(i),o=Object(v.a)(Object(h.a)(r));return e[o]=y({},e[o],Object(m.a)({},c,y({},e[o]?e[o][c]:{},{},a))),e}),{})).map((function(e){return{startOfDay:Object(b.a)(e[0]),items:E(e[1]).map((function(e){return y({ts:Object(b.a)(e[0])},e[1])}))}}))}function k(e){var t=e.responseData;return(t&&t["wfs:FeatureCollection"]&&t["wfs:FeatureCollection"]["wfs:member"]||[]).reduce((function(e,t){var n=t["BsWfs:BsWfsElement"],a=new Date(n["BsWfs:Time"]),r=Object(v.a)(a),i=n["BsWfs:ParameterName"],c=Number(n["BsWfs:ParameterValue"]);return e[r]=y({},e[r],{},Object(m.a)({},i,c)),e}),{})}function D(e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n);case 3:return a=e.sent,e.t0=f,e.t1=new DOMParser,e.next=8,a.text();case 8:return e.t2=e.sent,e.t3=e.t1.parseFromString.call(e.t1,e.t2,"text/xml"),e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(s.a.mark((function e(t){var n,a,r,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.location){e.next=3;break}return e.abrupt("return",void 0);case 3:return a=Object(g.a)(new Date,-1).toISOString(),r=Object(j.a)(Object(g.a)(new Date,72)).toISOString(),i="".concat(n.lat,",").concat(n.lng),c=["request=getFeature","storedquery_id=fmi::forecast::harmonie::surface::point::simple","parameters=temperature,windspeedms,precipitation1h","latlon=".concat(i),"starttime=".concat(a),"endtime=".concat(r)].join("&"),e.next=9,D({url:"https://opendata.fmi.fi/wfs?"+c});case 9:return o=e.sent,u=o&&o["wfs:FeatureCollection"]&&new Date(o["wfs:FeatureCollection"]["@attributes"].timeStamp),e.abrupt("return",{fetchTs:u,items:N({tsByValuesObject:k({responseData:o})})});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=3e4,M=36e5,T=18e5,C=[8,16,19];function B(e){var t=e.temperature;return Number.isFinite(t)?r.a.createElement("div",{className:"temperature"},r.a.createElement("span",{className:"temperature-number"},Math.round(t)),r.a.createElement("span",{className:"temperature-degree"},"\xb0C")):r.a.createElement("div",null,"(ei l\xe4mp\xf6tilatietoa)")}function H(e){var t=e.precipitation1h,n="",a="";return Number.isFinite(t)?t>1?(n="warning-text",a="Voimakas sade (".concat(t.toFixed(1)," mm/h)")):t>.3?a="Kohtalainen sade":t>0&&(n="light-text",a="Heikko sade"):(n="light-text",a="(ei sadetietoa)"),r.a.createElement("div",{className:n},a)}function V(e){var t=e.windspeedms,n="",a="";return Number.isFinite(t)?t>6?(n="warning-text",a="Navakka tuuli (".concat(Math.round(t)," m/s)")):t>4.5?a="Kohtalainen tuuli":t>3&&(n="light-text",a="Heikko tuuli"):(n="light-text",a="(ei tuulitietoa)"),r.a.createElement("div",{className:n},a)}function W(e){var t,n,a=e.temperature,i=e.windspeedms,c="",o="";if(Number.isFinite(a)&&Number.isFinite(i)){var u=(n=i,13.12+.6215*(t=a)-13.956*Math.pow(n,.16)+.4867*t*Math.pow(n,.16)),s=Math.abs(u-a);s<3?o="":(o="Tuntuu kuin ".concat(Math.round(u),"\xb0C"),c=s>7?"warning-text":"light-text")}else o="";return r.a.createElement("div",{className:c},o)}function J(e){var t=e.temperature,n=e.windspeedms,a=e.precipitation1h;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{temperature:t}),r.a.createElement(W,{temperature:t,windspeedms:n}),r.a.createElement(V,{windspeedms:n}),r.a.createElement(H,{precipitation1h:a}))}var L=n(35),I=n(38),q=n(36);function A(e){var t=e.ts;return r.a.createElement(r.a.Fragment,null,["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"][t.getDay()]," - ",Object(L.a)(t)?"T\xe4n\xe4\xe4n":Object(I.a)(t)?"Huomenna":Object(q.a)(t,"d.MM."))}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{includeMinutes:!1},t=e.ts,n=e.includeMinutes?"HH:mm":"H";return r.a.createElement("div",{className:"time"},"klo ",Object(q.a)(t,n))}var G=n(12);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e){var t=e.temperature;if(Number.isFinite(t)){var n=p(245/360,.8,.16),a=p(245/360,.85,.12),r=p(340/360,.85,.16),i=p(340/360,.85,.14),c=Math.min(Math.max(1/35*(t- -10),0),1),o="rgb(".concat(d(r,n,c).join(),")"),u="rgb(".concat(d(i,a,c).join(),")");return{backgroundImage:"repeating-linear-gradient(\n      45deg,\n      ".concat(o,",\n      ").concat(o," 0.8em,\n      ").concat(u," 0.8em,\n      ").concat(u," 1.6em\n    )")}}}function Q(e){var t=e.dayData,n=function(e){var t=e.items,n=e.startOfDay,a=[new Date,Object(g.a)(new Date,1),Object(g.a)(new Date,2)].filter((function(e){return Object(G.a)(e,n)})).map((function(e){return e.getHours()})).concat(C);return t.filter((function(e){return-1!==a.indexOf(e.ts.getHours())}))}({items:t.items,startOfDay:t.startOfDay});return 0===n.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forecast-date"},r.a.createElement(A,{ts:t.startOfDay})),r.a.createElement("div",{className:"weather-container"},n.map((function(e,t){return r.a.createElement("div",{key:t,className:"weather-item",style:_({},z({temperature:e.temperature}))},r.a.createElement(K,{ts:e.ts}),r.a.createElement("div",{className:"weather-values"},r.a.createElement(J,{temperature:e.temperature,windspeedms:e.windspeedms,precipitation1h:e.precipitation1h})))}))))}function R(e){var t=e.data;return t?r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(Q,{key:t,dayData:e})}))):null}var U=n(19),X=n(37);function Y(e){var t=e.ts,n=Object(a.useState)(0),i=Object(o.a)(n,2),c=i[0],u=i[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return u((function(e){return e+1}))}),3e4);return function(){return clearTimeout(e)}}),[c]),r.a.createElement("p",null,t?r.a.createElement(r.a.Fragment,null,"P\xe4ivitetty"," ",Object(U.a)(new Date,t,{locale:X.a})," ","sitten."):"Ei p\xe4ivitetty")}function Z(e){var t=e.location,n=e.forecastData,a=e.onLocateClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"S\xe4\xe4ennuste"),!t&&r.a.createElement(r.a.Fragment,null,"ei sijaintia ",r.a.createElement("button",{onClick:a},"Paikanna")),r.a.createElement(R,{data:n&&n.items}),r.a.createElement(Y,{ts:n&&n.fetchTs}))}function ee(e){var t=e.location,n=e.onLocateClick,i=Object(a.useState)(void 0),c=Object(o.a)(i,2),u=c[0],m=c[1],f=Object(a.useState)(void 0),p=Object(o.a)(f,2),d=p[0],b=p[1],O=Object(a.useState)(void 0),v=Object(o.a)(O,2),h=v[0],g=v[1],j=Object(a.useState)(0),w=Object(o.a)(j,2),y=w[0],E=w[1];Object(a.useEffect)((function(){var e=setTimeout((function(){return E((function(e){return e+1}))}),F);return function(){return clearTimeout(e)}}),[y]);var N=Object(a.useState)(!1),k=Object(o.a)(N,2),D=k[0],x=k[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.prev=1,e.next=4,S({location:t});case 4:n=e.sent,m(n),b(Date.now()),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),x(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();!u||JSON.stringify(h)!==JSON.stringify(t)||u&&d&&Date.now()-d>M?(console.log("Need forecast data refresh"),e(),g(t)):console.log("No need for forecast data refresh")}),[y,t]),r.a.createElement(r.a.Fragment,null,D&&"Virhe haettaessa viimeisimpi\xe4 ennusteita.",r.a.createElement(Z,{location:t,forecastData:u,onLocateClick:n}))}var te=function(){var e=Object(a.useState)(void 0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),u=Object(o.a)(c,2),s=u[0],l=u[1];function m(e){var t={lat:e.coords.latitude.toFixed(2),lng:e.coords.longitude.toFixed(2)};JSON.stringify(n)!==JSON.stringify(t)?(console.log("Got new location",t),l(!1),i(t)):console.log("Got same location")}function f(e){console.log(e)}function p(){console.log("Asking for location"),navigator.geolocation?(l(!0),navigator.geolocation.getCurrentPosition(m,f,{maximumAge:18e5})):console.log("No location support")}var d=Object(a.useState)(0),b=Object(o.a)(d,2),O=b[0],v=b[1];return Object(a.useEffect)((function(){var e=void 0;return void 0!==n&&(e=setTimeout((function(){return v((function(e){return e+1}))}),T)),function(){return clearTimeout(e)}}),[O,n]),Object(a.useEffect)((function(){void 0!==n&&p()}),[O]),Object(a.useEffect)((function(){navigator.permissions&&navigator.permissions.query({name:"geolocation"}).then((function(e){console.log(e),"granted"===e.state&&p()}))}),[]),r.a.createElement("div",{className:"App"},s&&"Paikannetaan...",r.a.createElement(ee,{location:n,onLocateClick:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d0338d54.chunk.js.map