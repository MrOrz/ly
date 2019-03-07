(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(36)},32:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);t(25),t(26);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),l=(t(31),t(32),t(16)),c=t(17),u=t(3),s=t(1),f=t(2);function d(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 8px;\n  padding: 8px;\n  border: 2px solid currentColor;\n  background-color: rgba(255, 255, 255, 0.12);\n  color: #ff9753;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.22);\n  }\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.2);\n    outline: 0;\n  }\n"]);return d=function(){return e},e}var m=f.a.textarea(d());var p=function(e){var n=e.value,t=Object(r.useCallback)(function(){window.ga("set","dimension1",n)},[n]);return a.a.createElement(m,Object.assign({},e,{onBlur:t}))},b=t(5);function g(e){var n=e.isIndeterminate,t=void 0!==n&&n,r=Object(b.a)(e,["isIndeterminate"]);return a.a.createElement("input",Object.assign({type:"checkbox",ref:function(e){e&&(e.indeterminate=t)}},r))}g.defaultProps={isIndeterminate:!1};var h=g;function v(){var e=Object(s.a)(["\n  margin: 40px 0;\n  header {\n    font-size: 20px;\n    border-bottom: 2px dotted rgba(255, 255, 255, 0.12);\n    label {\n      padding: 8px 0;\n    }\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(s.a)(["\n  background: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px;\n  border-radius: 8px;\n"]);return E=function(){return e},e}function x(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n"]);return x=function(){return e},e}function j(){var e=Object(s.a)(["\n  li {\n    display: inline-block;\n    padding-right: 2em;\n  }\n\n  label {\n    min-width: 105px;\n  }\n\n  input {\n    margin-right: 0.5em;\n  }\n"]);return j=function(){return e},e}var O=f.a.div(j()),w=f.a.ul(x()),k=Object(f.a)(w)(E()),y=f.a.section(v());function C(e){var n=e.legislators,t=e.selectedIdMap,o=e.onChange,i=void 0===o?function(){}:o,l=Object(r.useMemo)(function(){return n.reduce(function(e,n){n.id;var t=n.position;return e[t]=e[t]||0,e[t]+=1,e},{})},[n]),c=Object(r.useMemo)(function(){return n.reduce(function(e,n){var r=n.id,a=n.position;return e[a]=e[a]||0,t[r]&&(e[a]+=1),e},{})},[n,t]),u=Object.keys(t).length,s=Object(r.useCallback)(function(e){var r=e.target.value;0===c[r]?i(n.filter(function(e){var n=e.position,a=e.id;return n===r||t[a]}).map(function(e){return e.id})):i(n.filter(function(e){var n=e.position,a=e.id;return n!==r&&t[a]}).map(function(e){return e.id}))},[c,n,i,t]),f=Object(r.useCallback)(function(){i(0===u?n.map(function(e){return e.id}):[])},[u,n]),d=Object(r.useMemo)(function(){return n.filter(function(e){var n=e.id;return e.targeted&&t[n]}).length},[n,t]),m=Object(r.useMemo)(function(){return n.filter(function(e){return e.targeted}).length},[n]),p=Object(r.useCallback)(function(e){i(0===d?n.filter(function(e){var n=e.targeted,r=e.id;return n||t[r]}).map(function(e){return e.id}):n.filter(function(e){var n=e.targeted,r=e.id;return!n&&t[r]}).map(function(e){return e.id}))},[n,i,t]);return a.a.createElement(k,null,a.a.createElement("li",null,a.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},a.a.createElement(h,{onChange:f,checked:u===n.length,isIndeterminate:0<u&&u<n.length}),"\u5168\u9078")),Object.keys(l).map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("label",null,a.a.createElement(h,{value:e,onChange:s,checked:c[e]===l[e],isIndeterminate:0<c[e]&&c[e]<l[e]})," ",e))}),a.a.createElement("li",null,a.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},a.a.createElement(h,{onChange:p,checked:d===m,isIndeterminate:0<d&&d<m}),"\u906d\u5230\u53cd\u540c\u9396\u5b9a\u7684"),a.a.createElement("a",{href:"https://www.mirrormedia.mg/story/20190302inv001",target:"_blank",rel:"noopener noreferrer"},"\u7acb\u59d4\u5011")))}function I(e){var n=e.area,t=void 0===n?"":n,o=e.legislators,i=void 0===o?[]:o,l=e.selectedIdMap,u=void 0===l?{}:l,s=e.onChange,f=void 0===s?function(){}:s,d=i.filter(function(e){var n=e.id;return u[n]}).length,m=Object(r.useCallback)(function(e){if(0===d){var n=Object(c.a)({},u);i.forEach(function(e){var t=e.id;n[t]=!0}),f(Object.keys(n))}else{var t=i.reduce(function(e,n){return e[n.id]=!0,e},{});f(Object.keys(u).filter(function(e){return!t[e]}))}},[i,f,d,u]),p=Object(r.useCallback)(function(e){var n=e.target.value;u[n]?f(Object.keys(u).filter(function(e){return e!==n})):f(Object.keys(u).concat(n))},[i,u,f]);return a.a.createElement(y,null,a.a.createElement("header",null,a.a.createElement("label",null,a.a.createElement(h,{onChange:m,isIndeterminate:0<d&&d<i.length,checked:d===i.length})," ",t)),a.a.createElement(w,null,i.map(function(e){var n=e.id,t=e.name;return a.a.createElement("li",{key:n},a.a.createElement("label",null,a.a.createElement(h,{key:n,value:n,onChange:p,checked:!!u[n]})," ",t))})))}var S=a.a.memo(function(e){var n=e.legislators,t=void 0===n?[]:n,o=e.selectedLegislatorIds,i=void 0===o?[]:o,l=(e.doneLegislatorMap,e.onSelectionChange),c=void 0===l?function(){}:l,u=Object(r.useMemo)(function(){return t.reduce(function(e,n){return e[n.area]=e[n.area]||[],e[n.area].push(n),e},{})},[t]),s=Object(r.useMemo)(function(){return i.reduce(function(e,n){return e[n]=!0,e},{})},[i]);return a.a.createElement(O,null,a.a.createElement(C,{legislators:t,selectedIdMap:s,onChange:c}),Object.keys(u).map(function(e){return a.a.createElement(I,{key:e,area:e,selectedIdMap:s,legislators:u[e],onChange:c})}))}),M=t(14);function z(){var e=Object(s.a)(["\n  /*\n    Can't use emojis that is too large on mobile:\n    https://stackoverflow.com/questions/29142118/why-do-emoji-not-render-above-a-certain-size-in-chrome\n  */\n  font-size: 60px;\n  line-height: 1;\n  display: inline-block;\n  transform: perspective(400px) rotateY(90deg);\n  animation: "," 1s cubic-bezier(0, 0.37, 1, 0.63); /* no infinite here, use DOM change to trigger animation */\n\n  @media screen and (min-width: 1024px) {\n    font-size: 84px;\n  }\n"]);return z=function(){return e},e}function B(){var e=Object(s.a)(["\n  from {\n    transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n    transform: perspective(400px) rotateY(-90deg);\n  }\n"]);return B=function(){return e},e}var F=1;var L=Object(M.b)(B()),T=Object(f.a)(function(e){var n=e.icons,t=void 0===n?[]:n,o=Object(b.a)(e,["icons"]),i=Object(r.useState)(0),l=Object(u.a)(i,2),c=l[0],s=l[1],f=t.length;return Object(r.useEffect)(function(){var e=setTimeout(function(){s((c+1)%f)},1e3*F);return function(){return clearTimeout(e)}},[c,f]),a.a.createElement("span",Object.assign({key:c,role:"img","aria-label":"Icon"},o),t[c])})(z(),L);function N(){var e=Object(s.a)(["\n  margin: 40px 0;\n  text-align: center;\n  letter-spacing: 0.5em;\n"]);return N=function(){return e},e}var P=Object(f.a)(function(e){var n=e.content,t=void 0===n?"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66":n,r=Object(b.a)(e,["content"]);return a.a.createElement("p",r,a.a.createElement("span",{role:"img","aria-label":"Horizontal ruler"},t))})(N());t(33);var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=Object(r.useRef)(null);Object(r.useLayoutEffect)(function(){return t.current&&t.current.disconnect(),e&&(t.current=new IntersectionObserver(n,{}),t.current.observe(e)),function(){t.current&&t.current.disconnect()}},[e,n])};function W(){var e=Object(s.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 24px;\n\n  transform: translate(0, 100%);\n  transition: transform 0.2s ease-out, background-color 0.2s;\n\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 0;\n\n  & > span {\n    margin: 0 auto;\n  }\n\n  &::after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n\n  &.show {\n    transform: translate(0, 0);\n  }\n"]);return W=function(){return e},e}function R(){var e=Object(s.a)(["\n  @media screen and (min-width: 425px) {\n    display: none;\n  }\n"]);return R=function(){return e},e}var q=20,V=300,Y=f.a.br(R());var A=Object(f.a)(function(e){var n=e.doneLegislatorMap,t=e.selectedLegislatorIds,r=e.onClick,o=e.show,i=void 0!==o&&o,l=e.className,c=e.sendType,u=void 0===c?"":c,s=Object.keys(n).length>0,f=t.filter(function(e){return!n[e]}).length,d=("fb"===u?q:V)*f,m=d>120?" ".concat(Math.floor(d/60)," \u5206\u9418"):" ".concat(d," \u79d2");return a.a.createElement("button",{type:"button",onClick:r,className:"".concat(l," ").concat(i&&f>0?"show":""),"ga-on":"click","ga-event-category":"send","ga-event-action":"start","ga-event-label":s?"\u7e7c\u7e8c":"\u958b\u59cb","ga-event-value":f},a.a.createElement("span",null,s?"\u7e7c\u7e8c":"\u958b\u59cb","\u5411 ",f," \u4f4d\u59d4\u54e1\u9673\u60c5"," ",a.a.createElement(Y,null),a.a.createElement("small",null," (\u7d04\u9700 ",m,") ")))})(W());function J(){var e=Object(s.a)(["\n  list-style: none;\n  margin: 0 0 8px;\n  padding: 0;\n\n  &::before {\n    content: attr(data-label);\n  }\n\n  li {\n    display: inline-block;\n    padding: 4px 6px;\n    margin: 0 0 4px 4px;\n    font-size: 12px;\n    border-radius: 30px;\n    border: 1px solid currentColor;\n    color: #ff5368;\n    transition-property: color, background-color;\n    transition-duration: 0.2s;\n\n    &:hover {\n      background-color: #ff5368;\n      color: #fff;\n    }\n  }\n"]);return J=function(){return e},e}var X=null;function D(e){var n=e.template,t=n.label,o=n.msg,i=e.onSelect,l=void 0===i?function(){}:i,c=Object(r.useCallback)(function(){l(o)},[o,l]);return a.a.createElement("li",{onClick:c},t)}var H=Object(f.a)(function(e){var n=e.onSelect,o=void 0===n?function(){}:n,i=Object(b.a)(e,["onSelect"]),l=Object(r.useState)(X),c=Object(u.a)(l,2),s=c[0],f=c[1];return Object(r.useEffect)(function(){s||t.e(5).then(t.t.bind(null,37,3)).then(function(e){return f(X=e.default.rows)})},[s]),s?a.a.createElement("ul",Object.assign({"data-label":"\u52a0\u9ede\u5167\u5bb9\uff1a"},i),s.map(function(e,n){return a.a.createElement(D,{key:n,template:e,onSelect:o})})):null})(J());function $(){var e=Object(s.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n\n  h4 {\n    margin: 0 0 0.5em;\n  }\n\n  li {\n    padding: 16px;\n    flex: 1 1 0;\n    max-width: 240px;\n\n    border: 2px solid #ff9753;\n    border-left-width: 0;\n    border-right-width: 0;\n\n    color: #ff9753;\n    cursor: pointer;\n\n    &.selected {\n      background: #ff9753;\n      color: #fff;\n    }\n  }\n\n  li:first-of-type {\n    border-left-width: 2px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n\n  li:last-of-type {\n    border-right-width: 2px;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  p {\n    font-size: 12px;\n    margin: 0;\n  }\n"]);return $=function(){return e},e}var G=Object(f.a)(function(e){var n=e.value,t=void 0===n?"":n,r=e.onChange,o=void 0===r?function(){}:r,i=Object(b.a)(e,["value","onChange"]);return a.a.createElement("ul",i,a.a.createElement("li",{className:"fb"===t?"selected":"",onClick:function(){return o("fb")}},a.a.createElement("h4",null,"FB \u7c89\u5c08"," ",a.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcac")),a.a.createElement("p",null,a.a.createElement("span",{role:"img","aria-label":"\u512a\u9ede"},"\ud83d\udc4d")," ","\u65b9\u4fbf\u5feb\u901f\u3001\u901a\u52e4\u6642\u4e5f\u80fd\u9673\u60c5\uff01\u59d4\u54e1\u5076\u723e\u6703\u89aa\u81ea\u95b1\u8b80"),a.a.createElement("p",null,a.a.createElement("span",{role:"img","aria-label":"\u7f3a\u9ede"},"\ud83d\udc4e")," ","\u56de\u8986\u6bd4\u4f8b\u4f4e\u3001\u5b58\u5728\u611f\u4f4e")),a.a.createElement("li",{className:"tel"===t?"selected":"",onClick:function(){return o("tel")}},a.a.createElement("h4",null,"\u96fb\u8a71"," ",a.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcde")),a.a.createElement("p",null,a.a.createElement("span",{role:"img","aria-label":"\u512a\u9ede"},"\ud83d\udc4d")," ","\u5c08\u4eba\u50be\u807d\uff0c\u591a\u4eba\u9673\u60c5\u6642\u5f88\u6709\u611f"),a.a.createElement("p",null,a.a.createElement("span",{role:"img","aria-label":"\u7f3a\u9ede"},"\ud83d\udc4e")," ","\u82b1\u6642\u9593\u3001\u63a5\u96fb\u8a71\u7684\u52a9\u7406\u4e0d\u4e00\u5b9a\u6703\u8f49\u9054")))})($());function K(){var e=Object(s.a)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  padding-bottom: 64px;\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n  color: #8f53ff;\n  font-style: normal;\n"]);return Q=function(){return e},e}function U(){var e=Object(s.a)(["\n  text-align: center;\n  padding: 30px 0;\n\n  h1 {\n    font-size: 28px;\n    font-weight: normal;\n    letter-spacing: 0.125em;\n    margin: 24px 0 16px;\n    @media screen and (min-width: 425px) {\n      font-size: 40px;\n    }\n  }\n\n  h2 {\n    margin: 0;\n    font-size: 14px;\n    letter-spacing: 0.5em;\n    font-weight: 200;\n  }\n"]);return U=function(){return e},e}function Z(){var e=Object(s.a)(["\n  padding: 40px;\n  max-width: 720px;\n  margin: 0 auto;\n"]);return Z=function(){return e},e}var ee=f.a.div(Z()),ne=f.a.header(U()),te=f.a.em(Q()),re=a.a.memo(function(){return a.a.createElement(ne,null,a.a.createElement(T,{icons:["\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"]}),a.a.createElement("h1",null,"\u6211",a.a.createElement(te,null,"\u611b\u5bb6"),"\u30fb\u6211\u806f\u7d61"),a.a.createElement("h2",null,"\u5e73\u6b0a\u7acb\u9662\u9375\u76e4\u9673\u60c5"))}),ae=f.a.footer(K());var oe=function(e){var n=e.msg,t=void 0===n?"":n,o=e.onMsgChange,i=void 0===o?function(){}:o,l=e.legislators,c=void 0===l?[]:l,s=e.selectedLegislatorIds,f=void 0===s?[]:s,d=e.doneLegislatorMap,m=void 0===d?{}:d,b=e.onSelectionChange,g=void 0===b?function(){}:b,h=e.sendType,v=void 0===h?"":h,E=e.onSendTypeChange,x=void 0===E?function(){}:E,j=e.onSubmit,O=void 0===j?function(){}:j,w=Object(r.useRef)(null),k=Object(r.useState)(!1),y=Object(u.a)(k,2),C=y[0],I=y[1],M=Object(r.useCallback)(function(){return w.current.scrollIntoView({behavior:"smooth",block:"start"})},[w]),z=Object(r.useCallback)(function(e){e[0].isIntersecting?I(!0):I(!1)}),B=Object(r.useCallback)(function(e){i("".concat(t,"\n\n").concat(e))},[t,i]);return _(w.current,z),a.a.createElement(ee,null,a.a.createElement(re,null),a.a.createElement("section",null,a.a.createElement("p",null,"\u8b93\u540c\u5fd7\u80fd\u4ee5",a.a.createElement(te,null,"\u5a5a\u59fb"),"\u6210\u5bb6\uff0c\u5c31\u662f\u300c\u611b\u5bb6\u300d\u7684\u8868\u73fe\u3002 \u5728\u5e73\u6b0a\u6cd5\u6848\u901a\u904e\u4e4b\u524d\uff0c\u8b93\u6211\u5011\u52d5\u52d5\u624b\u6307\u982d\uff0c\u4e0d\u5206\u7570\u540c\u5730\u5411\u7acb\u6cd5\u59d4\u54e1\u5011\u8868\u9054\u6211\u5011",a.a.createElement(te,null,"\u5e0c\u671b\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a"),"\u7684\u5fc3\u8072\u5427\uff01"),a.a.createElement(P,null),a.a.createElement("h3",null,"\u4f60\u60f3\u8981\u600e\u9ebc\u9673\u60c5\uff1f"),a.a.createElement(G,{value:v,onChange:x}),a.a.createElement("label",null,a.a.createElement("h3",null,"\u4f60\u60f3\u8981\u8ddf\u59d4\u54e1\u5011\u8aaa\u4ec0\u9ebc\u5462\uff1f"),a.a.createElement(H,{onSelect:B}),a.a.createElement(p,{value:t,onChange:function(e){return i(e.target.value)},rows:5,autoFocus:!0})),a.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",margin:0}},a.a.createElement("span",{style:{fontSize:12,opacity:.5}},"\uff0a \u52a0\u5165\u4f60\u7684\u7d93\u6b77\u8207\u89c0\u5bdf\uff08\u4f8b\uff1a\u6709\u540c\u4e8b\u662f\u540c\u5fd7\uff09\u6703\u66f4\u6709\u8aaa\u670d\u529b\u5537\uff01"),a.a.createElement("button",{style:{flexShrink:0,marginLeft:"8px"},type:"button",onClick:M},"\u4e0b\u4e00\u6b65"))),a.a.createElement("section",{ref:w},a.a.createElement(P,null),a.a.createElement("h3",null,"\u8acb\u9078\u64c7\u8981\u9673\u60c5\u7684\u7acb\u59d4"),a.a.createElement(S,{legislators:c||[],selectedLegislatorIds:f,doneLegislatorMap:m,onSelectionChange:g}),a.a.createElement(A,{show:C,selectedLegislatorIds:f,doneLegislatorMap:m,onClick:O,sendType:v})),a.a.createElement(ae,null,a.a.createElement(P,{content:"\ud83c\udff3\ufe0f\u200d\ud83c\udf08"}),a.a.createElement("p",null,"\u6b64\u5de5\u5177\u70ba",a.a.createElement("a",{href:"https://www.facebook.com/groups/answerfamily/"},"\u300a\u6211\u611b\u5bb6\u6211\u89e3\u60d1 - \u5e73\u6b0a\u793e\u6703\u5c0d\u8a71\u5de5\u7a0b\u300b\u793e\u7fa4"),"\u53c3\u8207\u8005\u63d0\u4f9b\u4e4b",a.a.createElement("a",{href:"https://github.com/answerfamily/ly"},"\u958b\u653e\u539f\u59cb\u78bc"),"\u5c08\u6848\u3002"),a.a.createElement("p",null,"\u8cc7\u6599\u4f86\u6e90\uff1a",a.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a"),"\u3001",a.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9")),a.a.createElement("p",null,"Background icons:"," ",a.a.createElement("a",{href:"https://thenounproject.com/nookfulloption/collection/space2",target:"_blank",rel:"noopener noreferrer"},"Space2")," ","by Nook Fulloption from the Noun Project")))},ie=t(21),le=null;function ce(e){return e.slice(0,3).replace(/[\uff0e\u2027]/g,"")}var ue=function(){var e=Object(r.useState)(le),n=Object(u.a)(e,2),a=n[0],o=n[1];return Object(r.useEffect)(function(){a||t.e(4).then(t.t.bind(null,38,3)).then(function(e){var n=(e.default||[]).reduce(function(e,n){var t=n.name,r=n.contacts;return e[ce(t)]=r,e},{});o(function(){return le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n[ce(e)]}})})},[a]),a},se=(window.FB?Promise.resolve(window.FB):new Promise(function(e){window.fbAsyncInit=function(){e()}})).then(function(){window.FB.init({appId:"411731149364306",version:"v3.2"})});function fe(){var e=Object(s.a)(["\n  background: #ff9753;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  text-align: center;\n"]);return fe=function(){return e},e}var de=["messages","timeline"],me=f.a.div(fe());var pe=a.a.memo(function(e){var n=e.className,t=void 0===n?"":n,o=e.tabs,i=void 0===o?de:o,l=e.href,c=void 0===l?"":l,u=e.width,s=void 0===u?320:u,f=e.height,d=void 0===f?500:f,m=e.onParsed,p=void 0===m?null:m,b=e.profile,g=void 0===b?"":b,h=Object(r.useRef)(null);return Object(r.useLayoutEffect)(function(){se.then(function(){window.FB.XFBML.parse(h.current,function(){p&&p({width:s,height:d})})})},[i,c,s,d]),c?a.a.createElement("div",{ref:h,className:t},a.a.createElement("div",{className:"fb-page","data-href":c,"data-tabs":i.join(","),"data-small-header":"true","data-adapt-container-width":"false","data-show-facepile":"false","data-hide-cta":"true","data-width":s,"data-height":d})):a.a.createElement(me,{className:t,style:{width:s,height:d}},a.a.createElement("p",null,"\u7121\u6cd5\u986f\u793a\u9019\u4f4d\u59d4\u54e1\u7684\u7c89\u7d72\u5c08\u9801\u3002"),a.a.createElement("p",null,"\u8acb\u81f3",a.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},"\u59d4\u54e1\u7684\u500b\u4eba\u6a94\u6848"),"\u9801\u9762\u7559\u8a00\u3002"))});function be(){var e=Object(s.a)(["\n  font-size: 12px;\n  opacity: 0.88;\n"]);return be=function(){return e},e}function ge(){var e=Object(s.a)(["\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n\n  /* hiding scrollbar */\n  padding-right: 20px;\n  margin-right: -20px;\n\n  /* gradient appear & disappear */\n  mask-image: linear-gradient(\n    to bottom,\n    transparent,\n    black 6%,\n    black 94%,\n    transparent\n  );\n"]);return ge=function(){return e},e}var he=f.a.article(ge()),ve=f.a.footer(be());var Ee=function(e){var n=e.legislator,t=n.name,r=n.pridewatchpage,o=n.position,i=n.description,l=n.party,c=n.area,u=n.religion,s=n.subarea;return n.facebookpage,a.a.createElement("section",{style:{overflowX:"hidden"}},a.a.createElement("h1",null,t),a.a.createElement(he,null,a.a.createElement("p",null,o),i&&a.a.createElement("ul",{style:{padding:0}},i.split("\n").map(function(e,n){return a.a.createElement("li",{key:n},e)})),a.a.createElement("p",null,l,"\u30fb",c,s?"\uff0f".concat(s):null),u?a.a.createElement("p",null,u):null,a.a.createElement("p",null,a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"PrideWatch \u9801\u9762"))),a.a.createElement(ve,null,a.a.createElement(P,null),a.a.createElement("p",{style:{marginBottom:0}},"\u8cc7\u6599\u4f86\u6e90\uff1a",a.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a"),"\u3001",a.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9"))))};function xe(){var e=Object(s.a)(["\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  h4 {\n    margin: 0;\n  }\n  p {\n    margin: 0;\n  }\n  a {\n    font-weight: bold;\n  }\n  li {\n    margin-bottom: 1em;\n  }\n"]);return xe=function(){return e},e}var je=Object(f.a)(function(e){var n=e.contacts,t=void 0===n?[]:n,r=Object(b.a)(e,["contacts"]);return a.a.createElement("ul",r,t.map(function(e,n){var t=e.name,r=e.phone,o=e.address;return a.a.createElement("li",{key:n},a.a.createElement("h4",null,t),a.a.createElement("p",null,a.a.createElement("a",{href:"tel:".concat(r)},r)),a.a.createElement("small",null,o))}))})(xe());function Oe(){var e=Object(s.a)(["\n  padding: 8px 0;\n  border: 2px solid #ff5368;\n  background: transparent;\n  color: #ff5368;\n\n  &:hover {\n    color: #fff;\n  }\n"]);return Oe=function(){return e},e}function we(){var e=Object(s.a)(["\n  width: 100%;\n  font-size: 28px;\n"]);return we=function(){return e},e}var ke=f.a.button(we()),ye=Object(f.a)(ke)(Oe());function Ce(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n"]);return Ce=function(){return e},e}var Ie=f.a.div(Ce());var Se=function(e){var n=e.onBack;return a.a.createElement(Ie,null,a.a.createElement(T,{icons:["\ud83c\udff3\ufe0f\u200d\ud83c\udf08","\ud83d\ude47\u200d\u2640\ufe0f","\ud83d\ude47\u200d\u2642\ufe0f"]}),a.a.createElement("p",null,"\u5b8c\u6210\u56c9\uff01\u8b1d\u8b1d\u60a8 m(_ _)m"),a.a.createElement("p",null,a.a.createElement(ye,{style:{padding:16,fontSize:16},onClick:n},"\u56de\u9996\u9801")))},Me=t(22),ze=t.n(Me),Be=t(23),Fe=t.n(Be);var Le=function(e){var n=e.onCopy,t=e.text,o=Object(r.useRef)(null),i=Object(r.useRef)(null);return Object(r.useEffect)(function(){return i.current&&i.current.destroy(),i.current=new Fe.a(o.current,{text:function(){return t}}),i.current.on("success",function(){ze.a.success("\u300c".concat(t.slice(0,10),"\u22ef\u22ef\u300d\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f"),{position:"bottom-center"}),n()}),function(){i.current&&i.current.destroy()}},[o,n,t,i]),a.a.createElement(ye,{ref:o},"\u8907\u88fd")};function Te(){var e=Object(s.a)(["\n  display: flex;\n  background: #ff9753;\n  padding: 4px;\n  border-top: 0;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  font-size: 14px;\n\n  span {\n    margin: 0 1em 0 auto;\n  }\n"]);return Te=function(){return e},e}function Ne(){var e=Object(s.a)(["\n  position: relative; /* for AutoSizer */\n  flex: 1 1 60vh;\n\n  border: 2px solid #ff9753;\n  border-bottom: 0;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  overflow: hidden;\n\n  .preload-iframe {\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 1024px) {\n    flex-basis: auto;\n  }\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &::after {\n    margin-left: 16px;\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n"]);return Pe=function(){return e},e}function _e(){var e=Object(s.a)(["\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n\n  section {\n    display: flex;\n    flex-flow: column;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    max-width: 1280px;\n    height: 100vh;\n    padding: 60px 40px 40px;\n    margin: 0 auto;\n\n    section {\n      flex: 3;\n      padding-left: 24px;\n      &:first-of-type {\n        flex: 2;\n        padding-left: 0;\n      }\n    }\n  }\n"]);return _e=function(){return e},e}function We(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  padding-left: 16px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n\n  cursor: pointer;\n  font-size: 14px;\n\n  &::before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    margin-right: 8px;\n    border-top: 1px solid #fff;\n    border-left: 1px solid #fff;\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return We=function(){return e},e}function Re(){var e=Object(s.a)(["\n  position: absolute;\n  z-index: -1;\n  background: #7ed321;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0;\n\n  transition: width 0.75s ease-out;\n"]);return Re=function(){return e},e}function qe(){var e=Object(s.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin: 0 auto;\n  }\n"]);return qe=function(){return e},e}var Ve=f.a.header(qe()),Ye=f.a.div(Re()),Ae=f.a.div(We()),Je=f.a.div(_e()),Xe=Object(f.a)(ke,{shouldForwardProp:function(){return!0}})(Pe()),De=f.a.div(Ne()),He=f.a.div(Te());var $e=function(e){var n=e.msg,t=void 0===n?"":n,o=e.currentIdx,i=void 0===o?0:o,l=e.selectedLegislators,c=void 0===l?[]:l,s=e.sendType,f=void 0===s?"":s,d=e.onMsgChange,m=void 0===d?function(){}:d,b=(e.onPrev,e.onNext),g=void 0===b?function(){}:b,h=e.onBack,v=void 0===h?function(){}:h,E=Object(r.useRef)(null),x=ue(),j=Object(r.useState)(null),O=Object(u.a)(j,2),w=O[0],k=O[1],y=Object(r.useCallback)(function(){E.current.scrollIntoView({behavior:"smooth",block:"start"}),g()},[E,g]),C=Object(r.useCallback)(function(){E.current.scrollIntoView({behavior:"smooth",block:"start"})},[E]);if(-1===i)return a.a.createElement(Se,{onBack:v});if(!c||!c[i])return null;var I=c[i],S=I.name,M=I.facebookpage,z=I.facebookprofile,B=I.feedonly,F=I.cannotload;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ve,null,a.a.createElement(Ae,{onClick:v},"\u8a2d\u5b9a\u7acb\u59d4"),a.a.createElement("span",null,i+1," / ",c.length),a.a.createElement(Ye,{style:{width:"".concat((100*(i+1)/c.length).toFixed(2),"%")}})),a.a.createElement(Je,null,a.a.createElement(Ee,{legislator:c[i]}),a.a.createElement("section",null,a.a.createElement("h1",null,"fb"===f?"1. \u8907\u88fd\u6587\u5b57":"1. \u5099\u597d\u8b1b\u7a3f"),a.a.createElement(p,{style:{flex:1},placeholder:"\u628a\u9673\u60c5\u6587\u5b57\u8cbc\u5728\u9019\u88e1\uff0c\u65b9\u4fbf\u8907\u88fd\u8cbc\u4e0a",onChange:function(e){return m(e.target.value)},value:t,rows:5}),"fb"===f&&a.a.createElement("p",{style:{marginBottom:0}},a.a.createElement(Le,{onCopy:C,text:t}))),a.a.createElement("section",{ref:E},a.a.createElement("h1",null,"fb"===f?"2. \u8cbc\u4e0a\u4e26\u9001\u51fa":"2. \u62ff\u8d77\u8a71\u7b52\u64a5\u6253"),"fb"===f?a.a.createElement(a.a.Fragment,null,a.a.createElement(De,{style:w?{height:w,flexBasis:"auto"}:{}},a.a.createElement(ie.a,null,function(e){var n=e.width,t=e.height;return[a.a.createElement(pe,{key:i,href:F?null:M,profile:z,width:n-4,height:t-2,onParsed:function(e){var n=e.height;return k(n+2)}}),c[i+1]&&a.a.createElement(pe,{className:"preload-iframe",key:i+1,href:c[i+1].cannotload?null:c[i+1].facebookpage,profile:c[i+1].facebookprofile,width:n-4,height:t-2})]})),a.a.createElement(He,null,B?"\uff0a \u59d4\u54e1\u7c89\u5c08\u4e0d\u958b\u653e\u79c1\u8a0a\uff0c\u8acb\u9078\u4e00\u7bc7\u8cbc\u6587\u56de\u61c9":a.a.createElement(a.a.Fragment,null,"\uff0a \u8a18\u5f97\u8981\u6309\u300c\u767c\u9001\u300d\u624d\u6703\u9001\u51fa\u5537\uff01",a.a.createElement("span",null,"\u2191\u2191")))):x&&a.a.createElement(je,{contacts:x(S)}),a.a.createElement("p",{style:{marginBottom:0}},a.a.createElement(Xe,{"ga-on":"click","ga-event-category":"send","ga-event-action":"submit","ga-event-label":S,onClick:y},"\u4e0b\u4e00\u4f4d")))))},Ge=null;var Ke=function(){var e=Object(r.useState)(Ge),n=Object(u.a)(e,2),a=n[0],o=n[1];return Object(r.useEffect)(function(){a||t.e(3).then(t.t.bind(null,39,3)).then(function(e){return o(Ge=e.default.rows.filter(function(e){return!!e.area}))})},[a]),[a,Object(r.useMemo)(function(){return(a||[]).reduce(function(e,n){return e[n.id]=n,e},{})},[a])]},Qe={"\u652f\u6301\u540c\u5a5a":1,"\u652f\u6301\u5c08\u6cd5":2,"\u53cd\u5c0d\u540c\u5a5a":3,"\u672a\u8868\u614b":4},Ue="fb",Ze="\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u8acb\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002",en="\u60a8\u597d\uff0c\u6211\u662f\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u6211\u60f3\u8981\u9673\u60c5\u3002\n\n\u6211\u5e0c\u671b\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002";var nn=function(){var e=Ke(),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)("settings"),s=Object(u.a)(i,2),f=s[0],d=s[1],m=Object(r.useState)(Ze),p=Object(u.a)(m,2),b=p[0],g=p[1],h=Object(r.useState)([]),v=Object(u.a)(h,2),E=v[0],x=v[1],j=Object(r.useState)({}),O=Object(u.a)(j,2),w=O[0],k=O[1],y=Object(r.useState)(Ue),C=Object(u.a)(y,2),I=C[0],S=C[1],M=Object(r.useMemo)(function(){return E.map(function(e){return o[e]})},[E,o]),z=Object(r.useMemo)(function(){return E.findIndex(function(e){return!w[e]})},[E,w]),B=Object(r.useCallback)(function(e){x(e.sort(function(e,n){if(w[e]&&!w[n])return-1;if(!w[e]&&w[n])return 1;var t=Qe[o[e].position],r=Qe[o[n].position];return t-r!==0?t-r:e-n}))},[x,w,o]),F=Object(r.useCallback)(function(e){e!==I&&(S(e),window.ga("set","dimension2",e),"fb"!==e||""!==b.trim()&&b!==en?"tel"!==e||""!==b.trim()&&b!==Ze||g(en):g(Ze))},[b,g,I,S]),L=Object(r.useCallback)(function(){return d("send")},[d]),T=Object(r.useCallback)(function(){return d("settings")},[d]),N=Object(r.useCallback)(function(){return k(Object(c.a)({},w,Object(l.a)({},M[z].id,!0)))},[w,M,z]);switch(f){case"settings":return a.a.createElement(oe,{msg:b,onMsgChange:g,legislators:t,selectedLegislatorIds:E,onSelectionChange:B,doneLegislatorMap:w,sendType:I,onSendTypeChange:F,onSubmit:L});case"send":return a.a.createElement($e,{msg:b,sendType:I,currentIdx:z,selectedLegislators:M,onMsgChange:g,onNext:N,onBack:T});default:throw new Error("Wrong page settings")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.ga("require","eventTracker"),window.ga("require","outboundLinkTracker"),i.a.render(a.a.createElement(nn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.b3f48dc9.chunk.js.map